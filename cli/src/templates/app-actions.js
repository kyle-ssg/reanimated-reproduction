const functionName = function (prefix) {
  return prefix.charAt(0).toUpperCase() + prefix.slice(1)
}
const apiName = function (api) {
  if (api.charAt(0) === '/') {
    return api.slice(1)
  }
  return api
}

module.exports = {
  action: function (action) {
    return `    '${action}': '${action}',
    '${action}_LOADED': '${action}_LOADED',
    '${action}_ERROR': '${action}_ERROR',
`
  },
  getCollection: function (action, prefix) {
    return `
    get${functionName(prefix)}(data, callbacks = {}) {
        return {
            type: Actions.${action},
            data,
            ...callbacks,
        };
    },
`
  },
  getSingle: function (action, prefix) {
    return `
    get${functionName(prefix)}(id, callbacks = {}) {
        return {
            type: Actions.${action},
            id,
            ...callbacks,
        };
    },
`
  },
  yieldCollection: function (action, prefix, api) {
    return `
export function* get${functionName(prefix)}(action) {
    yield getAction(action, \`\${Project.api}${apiName(api)}\`, '${action}');
}
`
  },
  takeLatest: function (action, prefix) {
    return `takeLatest(Actions.${action}, get${functionName(prefix)}),`
  },

}
