"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writePatchQuery = exports.writeUpdateQuery = exports.writeDeleteQuery = exports.writeCreateQuery = exports.writeCollectionQuery = exports.writeGetQuery = exports.writeStoreService = exports.getServicePath = exports.writeExport = exports.writeRequestTypes = void 0;
const plural_1 = require("./helpers/plural");
const capitalize_1 = require("./helpers/capitalize");
const findRootPath_1 = require("./helpers/findRootPath");
const fs = require('fs');
const path = require('path');
let rootPath = (0, findRootPath_1.findRootPath)();
const store = path.join(rootPath, './common/store.ts');
const requests = path.join(rootPath, './common/types/requests.ts');
const responses = path.join(rootPath, './common/types/responses.ts');
const servicePointer = '  // END OF ENDPOINTS';
const typePointer = '// END OF TYPES';
const exportPointer = '// END OF EXPORTS';
const importPointer = '// END OF IMPORTS';
const middlewarePointer = '// END OF MIDDLEWARE';
const functionPointer = '// END OF FUNCTION_EXPORTS';
const reducerPointer = '// END OF REDUCERS';
const capitlizeFirst = function (str) {
    // checks for null, undefined and empty string
    if (!str)
        return "";
    return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
};
const functionName = function (action, prefix) {
    const post = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    const actionParts = action.split('_');
    return actionParts[0].toLowerCase() + post;
};
async function writeGeneric(path, string, pointer, description, alreadyExistsString = string) {
    console.log("Writing " + description);
    let res = fs.readFileSync(path, 'utf8');
    if (res.includes(alreadyExistsString)) {
        console.log(description + " already exist");
        return;
    }
    if (!res.includes(pointer)) {
        console.log(description + " pointer does not exist!");
        return;
    }
    res = res.replace(pointer, `${string}\n  ${pointer}`);
    fs.writeFileSync(path, res, "utf8");
}
async function writeRequestTypes(action, name, isPlural) {
    const includeId = action !== 'create' && (action !== 'get' || !isPlural);
    const includeIdResponse = !isPlural;
    const func = functionName(action, name);
    await writeGeneric(requests, `${func}: {${includeId ? "id:string" : ""}}`, typePointer, "Request Types", `${func}:`);
    await writeGeneric(responses, `${name}: {${includeIdResponse ? "id:string" : ""}}`, typePointer, "Response Types", `${name}:`);
}
exports.writeRequestTypes = writeRequestTypes;
const apiName = function (url) {
    // eslint-disable-next-line no-template-curly-in-string
    const replace = '${query.id}';
    if (url.charAt(0) === '/') {
        return url.slice(1).replace(':id', replace);
    }
    // eslint-disable-next-line no-template-curly-in-string
    return url.replace(':id', replace);
};
async function writeExport(name, functionName, queryFunctionName) {
    const hookPath = await getServicePath(name);
    await writeGeneric(hookPath, queryFunctionName + ",", exportPointer, "Exports", queryFunctionName + ",");
    await writeGeneric(hookPath, `export async function ${functionName}(store: any, data: Req['${functionName}']) {
  store.dispatch(${name}Service.endpoints.${functionName}.initiate(data))
  return todoService.util.getRunningOperationPromises();
}`, functionPointer, 'Function export');
}
exports.writeExport = writeExport;
async function getServicePath(name) {
    console.log(name);
    const location = path.join(rootPath, `./common/hooks/use${(0, capitalize_1.capitalize)(name)}.ts`);
    if (fs.existsSync(location)) {
        console.log("Service already exists");
    }
    else {
        fs.writeFileSync(location, `import { createApi } from '@reduxjs/toolkit/query/react'
import { baseApiOptions } from '../utils/serviceUtils'
import { Res } from '../types/responses'
import { Req } from '../types/requests'

export const ${name}Service = createApi({
  ...baseApiOptions(),
  reducerPath: '${name}Service',
  tagTypes: ['${(0, capitalize_1.capitalize)(name)}'],
  endpoints: (builder) => ({

    // END OF ENDPOINTS
  }),
})

// END OF FUNCTION_EXPORTS

export const {
  // END OF EXPORTS
} = ${name}Service

// const { data, isLoading } = useGet${(0, capitalize_1.capitalize)(name)}Query({ id: 2 }, {}) get hook
// const [create${(0, capitalize_1.capitalize)(name)}, { isLoading, data, isSuccess }] = useCreate${(0, capitalize_1.capitalize)(name)}Mutation() create hook
// ${name}Service.endpoints.get${(0, capitalize_1.capitalize)(name)}.select({id: 2})(store.getState()) access data from any function
`);
    }
    return location;
}
exports.getServicePath = getServicePath;
async function writeStoreService(name) {
    await writeGeneric(store, `import { ${name}Service } from './hooks/use${(0, capitalize_1.capitalize)(name)}'`, importPointer, "Store import");
    await writeGeneric(store, `[${name}Service.reducerPath]: ${name}Service.reducer,`, reducerPointer, "Reducer import");
    await writeGeneric(store, ` .concat(${name}Service.middleware)`, middlewarePointer, "Middleware import");
}
exports.writeStoreService = writeStoreService;
async function writeGetQuery(name, url, providesItem) {
    const func = functionName("get", name);
    const hookPath = await getServicePath(name);
    await writeGeneric(hookPath, `  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:(res)=>[${providesItem && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(name, "get" + capitlizeFirst(name), "useGet" + capitlizeFirst(name + "Query"));
    await writeStoreService(name);
}
exports.writeGetQuery = writeGetQuery;
async function writeCollectionQuery(name, url, providesCollection) {
    const func = functionName("get", name);
    const hookPath = await getServicePath(name);
    await writeGeneric(hookPath, `  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: () => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:[${providesCollection && `{ type: '${(0, capitalize_1.capitalize)((0, plural_1.singular)(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(name, "get" + capitlizeFirst(name), "useGet" + capitlizeFirst(name + "Query"));
    await writeStoreService(name);
}
exports.writeCollectionQuery = writeCollectionQuery;
async function writeCreateQuery(name, url, invalidatesCollection) {
    const func = functionName("create", name);
    const hookPath = await getServicePath(name);
    await writeGeneric(hookPath, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'POST',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' }`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(name, "create" + capitlizeFirst(name), "useCreate" + capitlizeFirst(name + "Mutation"));
    await writeStoreService(name);
}
exports.writeCreateQuery = writeCreateQuery;
async function writeDeleteQuery(name, url, invalidatesCollection) {
    const func = functionName("delete", name);
    const hookPath = await getServicePath(name);
    await writeGeneric(hookPath, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'DELETE',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(name, "delete" + capitlizeFirst(name), "useDelete" + capitlizeFirst(name + "Mutation"));
    await writeStoreService(name);
}
exports.writeDeleteQuery = writeDeleteQuery;
async function writeUpdateQuery(name, url, invalidatesCollection, invalidatesItem) {
    const func = functionName("update", name);
    const hookPath = await getServicePath(name);
    await writeGeneric(hookPath, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PUT',
        body: query,
      }),
      invalidatesTags:(res)=>[${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' },`}${invalidatesItem && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(name, "update" + capitlizeFirst(name), "useUpdate" + capitlizeFirst(name + "Mutation"));
    await writeStoreService(name);
}
exports.writeUpdateQuery = writeUpdateQuery;
async function writePatchQuery(name, url, invalidatesCollection, invalidatesItem) {
    const func = functionName("patch", name);
    const hookPath = await getServicePath(name);
    await writeGeneric(hookPath, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PATCH',
        body: query,
      }),
      invalidatesTags:(res:Res['${name}'])=>[${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' },`}${invalidatesItem && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: res.id },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(name, "update" + capitlizeFirst(name), "useUpdate" + capitlizeFirst(name + "Mutation"));
    await writeStoreService(name);
}
exports.writePatchQuery = writePatchQuery;
