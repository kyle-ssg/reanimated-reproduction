"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writePatchQuery = exports.writeUpdateQuery = exports.writeDeleteQuery = exports.writeCreateQuery = exports.writeCollectionQuery = exports.writeGetQuery = exports.writeExport = exports.writeRequestTypes = void 0;
const plural_1 = require("./helpers/plural");
const capitalize_1 = require("./helpers/capitalize");
const fs = require('fs');
const path = require('path');
const rootPath = path.join(__dirname, '../../');
const common = path.join(rootPath, './common');
const service = path.join(rootPath, './common/services/defaultService.ts');
const requests = path.join(rootPath, './common/services/requests.ts');
const responses = path.join(rootPath, './common/services/responses.ts');
const servicePointer = '  // END OF ENDPOINTS';
const typePointer = '// END OF TYPES';
const exportPointer = '// END OF EXPORTS';
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
    await writeGeneric(requests, `${func}: {${includeId ? "id:string" : ""}}`, typePointer, "Request Types", `${name}:`);
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
async function writeExport(name) {
    await writeGeneric(service, name + ",", exportPointer, "Exports", name + ",");
}
exports.writeExport = writeExport;
async function writeGetQuery(name, url, providesItem) {
    const func = functionName("get", name);
    await writeGeneric(service, `  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:(res)=>[${providesItem && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(functionName("use", "Get" + capitlizeFirst(name + "Query")));
}
exports.writeGetQuery = writeGetQuery;
async function writeCollectionQuery(name, url, providesCollection) {
    const func = functionName("get", name);
    await writeGeneric(service, `  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: (query) => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:[${providesCollection && `{ type: '${(0, capitalize_1.capitalize)((0, plural_1.singular)(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(functionName("use", "Get" + capitlizeFirst(name + "Query")));
}
exports.writeCollectionQuery = writeCollectionQuery;
async function writeCreateQuery(name, url, invalidatesCollection) {
    const func = functionName("create", name);
    await writeGeneric(service, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'POST',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' }`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(functionName("use", "Create" + capitlizeFirst(name + "Mutation")));
}
exports.writeCreateQuery = writeCreateQuery;
async function writeDeleteQuery(name, url, invalidatesCollection) {
    const func = functionName("delete", name);
    await writeGeneric(service, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'DELETE',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(functionName("use", "Delete" + capitlizeFirst(name + "Mutation")));
}
exports.writeDeleteQuery = writeDeleteQuery;
async function writeUpdateQuery(name, url, invalidatesCollection, invalidatesItem) {
    const func = functionName("update", name);
    await writeGeneric(service, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PUT',
        body: query,
      }),
      invalidatesTags:(res)=>[${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' },`}${invalidatesItem && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(functionName("use", "Update" + capitlizeFirst(name + "Mutation")));
}
exports.writeUpdateQuery = writeUpdateQuery;
async function writePatchQuery(name, url, invalidatesCollection, invalidatesItem) {
    const func = functionName("patch", name);
    await writeGeneric(service, `  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PATCH',
        body: query,
      }),
      invalidatesTags:(res:Res['${name}'])=>[${invalidatesCollection && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: 'LIST' },`}${invalidatesItem && `{ type: '${(0, plural_1.singular)((0, capitalize_1.capitalize)(name))}', id: res.id },`}],
    }),`, servicePointer, "Query", `${func}:`);
    await writeExport(functionName("use", "Patch" + capitlizeFirst(name + "Mutation")));
}
exports.writePatchQuery = writePatchQuery;
