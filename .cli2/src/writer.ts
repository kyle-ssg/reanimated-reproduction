import { plural, singular } from "./helpers/plural";
import { capitalize } from "./helpers/capitalize";
import { inc } from "nprogress";

const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../../');
const store = path.join(rootPath, './common/store.ts');
const requests = path.join(rootPath, './common/types/requests.ts');
const responses = path.join(rootPath, './common/types/responses.ts');

const servicePointer = '  // END OF ENDPOINTS';
const typePointer = '// END OF TYPES';
const exportPointer = '// END OF EXPORTS';

const importPointer = '// END OF IMPORTS';
const middlewarePointer = '// END OF MIDDLEWARE';
const reducerPointer = '// END OF REDUCERS';
const capitlizeFirst =  function(str:string) {
  // checks for null, undefined and empty string
  if (!str) return "";
  return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

const functionName = function (action:string, prefix:string) {
    const post = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    const actionParts = action.split('_');
    return  actionParts[0].toLowerCase() + post;
};

async function writeGeneric(path:string, string:string,  pointer:string, description:string, alreadyExistsString=string, ) {
  console.log("Writing " + description)
  let res = fs.readFileSync(path, 'utf8');
  if (res.includes(alreadyExistsString)) {
    console.log(description+" already exist")
    return
  }
  if(!res.includes(pointer)){
    console.log(description+" pointer does not exist!")
    return
  }
  res = res.replace(pointer, `${string}\n  ${pointer}`);
  fs.writeFileSync(path, res, "utf8")
}

export async function writeRequestTypes(action: "create" | "update" | "patch" | "delete" | "get", name:string,isPlural?:boolean) {
  const includeId = action !== 'create' && (action!=='get'||!isPlural)
  const includeIdResponse = !isPlural
  const func = functionName(action,name)
  await writeGeneric(requests,`${func}: {${includeId?"id:string":""}}`, typePointer, "Request Types", `${func}:`)
  await writeGeneric(responses,`${name}: {${includeIdResponse?"id:string":""}}`, typePointer, "Response Types", `${name}:`)
}

const apiName = function (url:string) {
  // eslint-disable-next-line no-template-curly-in-string
  const replace = '${query.id}';
  if (url.charAt(0) === '/') {
    return url.slice(1).replace(':id', replace);
  }
  // eslint-disable-next-line no-template-curly-in-string
  return url.replace(':id', replace);
};
export async function writeExport(name:string, functionName:string) {
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath, functionName+",", exportPointer, "Exports",functionName+",")
}

export async function getServicePath(name:string) {
  console.log(name)
  const location = path.join(rootPath, `./common/hooks/use${capitalize(name)}.ts`);

  if (fs.existsSync(location)){
    console.log("Service already exists")
  } else {
    fs.writeFileSync(location, `import { createApi } from '@reduxjs/toolkit/query/react'
import { baseApiOptions } from '../utils/serviceUtils'
import { Res } from '../types/responses'
import { Req } from '../types/requests'

export const ${name}Service = createApi({
  ...baseApiOptions(),
  reducerPath: '${name}Service',
  tagTypes: ['${capitalize(name)}'],
  endpoints: (builder) => ({

    // END OF ENDPOINTS
  }),
})

export const {
  // END OF EXPORTS
} = ${name}Service

// const { data, isLoading } = useGet${capitalize(name)}Query({ id: 2 }, {}) get hook
// const [create${capitalize(name)}, { isLoading, data, isSuccess }] = useCreate${capitalize(name)}Mutation() create hook
// ${name}Service.endpoints.get${capitalize(name)}.select({id: 2})(store.getState()) access data from any function
`)
  }
  return location;
}

export async function writeStoreService(name:string) {
  await writeGeneric(store,`import { ${name}Service } from './hooks/use${capitalize(name)}'`, importPointer, "Store import")
  await writeGeneric(store,`[${name}Service.reducerPath]: ${name}Service.reducer,`, reducerPointer, "Reducer import")
  await writeGeneric(store,` .concat(${name}Service.middleware)`, middlewarePointer, "Middleware import")
}
export async function writeGetQuery(name:string, url:string, providesItem:boolean) {
  const func = functionName("get", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:(res)=>[${providesItem&&`{ type: '${singular(capitalize(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,functionName("use","Get"+ capitlizeFirst(name+"Query")))
  await writeStoreService(name)
}


export async function writeCollectionQuery(name:string, url:string, providesCollection:boolean) {
  const func = functionName("get", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: () => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:[${providesCollection&&`{ type: '${capitalize(singular(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name, functionName("use", "Get"+capitlizeFirst(name+"Query")))
  await writeStoreService(name)
}


export async function writeCreateQuery(name:string, url:string, invalidatesCollection:boolean) {
  const func = functionName("create", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'POST',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' }`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,functionName("use","Create"+ capitlizeFirst(name+"Mutation")))
  await writeStoreService(name)
}

export async function writeDeleteQuery(name:string, url:string, invalidatesCollection:boolean) {
  const func = functionName("delete", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'DELETE',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,functionName("use","Delete"+ capitlizeFirst(name+"Mutation")))
  await writeStoreService(name)
}

export async function writeUpdateQuery(name:string, url:string, invalidatesCollection:boolean, invalidatesItem:boolean) {
  const func = functionName("update", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PUT',
        body: query,
      }),
      invalidatesTags:(res)=>[${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' },`}${invalidatesItem&&`{ type: '${singular(capitalize(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,functionName("use","Update"+ capitlizeFirst(name+"Mutation")))
  await writeStoreService(name)
}

export async function writePatchQuery(name:string, url:string, invalidatesCollection:boolean, invalidatesItem:boolean) {
  const func = functionName("patch", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PATCH',
        body: query,
      }),
      invalidatesTags:(res:Res['${name}'])=>[${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' },`}${invalidatesItem&&`{ type: '${singular(capitalize(name))}', id: res.id },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,functionName("use","Patch"+ capitlizeFirst(name+"Mutation")))
  await writeStoreService(name)
}
