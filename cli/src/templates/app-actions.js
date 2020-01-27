const functionName = function (action, prefix) {
  const post = prefix.charAt(0).toUpperCase() + prefix.slice(1)
  const actionParts = action.split('_')
  return actionParts[0].toLowerCase() + post
}

const apiName = function (api, isUpdate) {
  // eslint-disable-next-line no-template-curly-in-string
  const replace = isUpdate ? '${action.data.id}' : '${action.id}'
  if (api.charAt(0) === '/') {
    return api.slice(1).replace(':id', replace)
  }
  // eslint-disable-next-line no-template-curly-in-string
  return api.replace(':id', replace)
}

module.exports = {
  action: function (action) {
    return `    '${action}': '${action}',
    '${action}_LOADED': '${action}_LOADED',
    '${action}_ERROR': '${action}_ERROR',
`
  },
  takeLatest: function (action, prefix) {
    return `takeLatest(Actions.${action}, ${functionName(action, prefix)}),`
  },
  // appactions
  getCollection: function (action, prefix) {
    return `
    ${functionName(action, prefix)}(data, callbacks = {}) {
        return {
            type: Actions.${action},
            data,
            ...callbacks,
        };
    },
`
  },
  get: function (action, prefix) {
    return `
    ${functionName(action, prefix)}(id, callbacks = {}) {
        return {
            type: Actions.${action},
            id,
            ...callbacks,
        };
    },
`
  },
  post: function (action, prefix) {
    return `
    ${functionName(action, prefix)}(data, callbacks = {}) {
        return {
            type: Actions.${action},
            data,
            ...callbacks,
        };
    },
`
  },
  update: function (action, prefix) {
    return `
    ${functionName(action, prefix)}(data, callbacks = {}) {
        return {
            type: Actions.${action},
            data,
            ...callbacks,
        };
    },
`
  },
  // reducer
  reducerCollection: function (action, prefix) {
    return `case Actions.${action}:
            return itemLoading(state, '${prefix}', action);
        case Actions.${action}_LOADED:
            return itemLoaded(state, '${prefix}', action);
        case Actions.${action}_ERROR:
            return itemError(state, '${prefix}', action);`
  },
  reducerGet: function (action, prefix) {
    return `case Actions.${action}:
            return itemLoading(state, '${prefix}', action);
        case Actions.${action}_LOADED:
            return itemLoaded(state, '${prefix}', action);
        case Actions.${action}_ERROR:
            return itemError(state, '${prefix}', action);`
  },
  reducerPost: function (action, prefix) {
    return `case Actions.${action}:
            return itemLoading(state, '${prefix}', action);
        case Actions.${action}_LOADED:
            return itemSaved(state, '${prefix}', action);
        case Actions.${action}_ERROR:
            return itemError(state, '${prefix}', action);`
  },
  reducerUpdate: function (action, prefix) {
    return `case Actions.${action}:
            return itemLoading(state, '${prefix}', action);
        case Actions.${action}_LOADED:
            return itemSaved(state, '${prefix}', action);
        case Actions.${action}_ERROR:
            return itemError(state, '${prefix}', action);`
  },
  // yield
  yieldCollection: function (action, prefix, api) {
    return `
export function* ${functionName(action, prefix)}(action) {
    yield getAction(action, \`\${Project.api}${apiName(api)}\`, '${action}');
}
`
  },
  yieldGet: function (action, prefix, api) {
    return `
export function* ${functionName(action, prefix)}(action) {
    yield getAction(action, \`\${Project.api}${apiName(api)}\`, '${action}');
}`
  },
  yieldPost: function (action, prefix, api) {
    return `
export function* ${functionName(action, prefix)}(action) {
    yield postAction(action, \`\${Project.api}${apiName(api, true)}\`, '${action}');
}`
  },
  yieldUpdate: function (action, prefix, api) {
    return `
export function* ${functionName(action, prefix)}(action) {
    yield updateAction(action, \`\${Project.api}${apiName(api, true)}\`, '${action}');
}`
  },
  //  provider
  providerItem: function (action, prefix) {
    return `
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../app-actions';

const with${prefix} = (WrappedComponent) => {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedComponent);
};

const mapDispatchToProps = dispatch => bindActionCreators({
    ${functionName('GET', prefix)}: AppActions.${functionName('GET', prefix)},
    ${functionName('CREATE', prefix)}: AppActions.${functionName('CREATE', prefix)},
    ${functionName('UPDATE', prefix)}: AppActions.${functionName('UPDATE', prefix)},
}, dispatch);

function mapStateToProps(state, props) {
    const { ${prefix}, ${prefix}Loading, ${prefix}Error } = state;
    return { ${prefix}: ${prefix} && ${prefix}[props.id], ${prefix}Loading, ${prefix}Error };
}

export default (with${prefix});    
`
  },
  providerCollection: function (action, prefix) {
    return `
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../app-actions';

const with${prefix} = (WrappedComponent) => {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedComponent);
};

const mapDispatchToProps = dispatch => bindActionCreators({
    ${functionName('GET', prefix)}: AppActions.${functionName('GET', prefix)},
}, dispatch);

function mapStateToProps(state, props) {
    const { ${prefix}, ${prefix}Loading, ${prefix}Error } = state;
    return { ${prefix}: ${prefix}, ${prefix}Loading, ${prefix}Error };
}

export default (with${prefix});    
`
  },

}
