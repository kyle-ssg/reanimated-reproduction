const functionName = function (action, prefix) {
  const post = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  const actionParts = action.split('_');
  return actionParts[0].toLowerCase() + post;
};

const apiName = function (api) {
  // eslint-disable-next-line no-template-curly-in-string
  const replace = '${action.data.id}';
  if (api.charAt(0) === '/') {
    return api.slice(1).replace(':id', replace);
  }
  // eslint-disable-next-line no-template-curly-in-string
  return api.replace(':id', replace);
};

module.exports = {
  singleAction(action) {
    return `  '${action}': '${action}',
`;
  },
  action(action) {
    return `  '${action}': '${action}',
  '${action}_LOADED': '${action}_LOADED',
  '${action}_ERROR': '${action}_ERROR',
`;
  },
  screenRouteUrl(key,path) {
    return `"${key}" = "${path}",`;
  },
  screenRoute(name,key) {
    return `[RouteUrls.${key}]: {
    options: {
    },
    component: ${name},
  },`;
  },
  screenRouteImport(name) {
    return `import ${name} from "screens/${name}";
`;
  },
  routeComponent(name) {
    return `<Stack.Screen
          name={RouteUrls.${name}}
          options={routes[RouteUrls.${name}].options}
          component={routes[RouteUrls.${name}].component}
        />
`;
  },
  screenComponent(name) {
    return `import Text from "components/base/forms/Text";
import ScreenContainer from "components/ScreenContainer";
import {FC} from "react";
import withScreen, { Screen } from "./withScreen";

type ${name} = Screen & {
}

const ${name}: FC<${name}> = ({ children }) => {
  return (
      <ScreenContainer style={Styles.body}>
        <Text>I am the ${name}</Text>
      </ScreenContainer>
  );
};

export default withScreen(${name});
`;
  },
  collectionRequestStateTypes(action, prefix) {
    return `  ${functionName("GET", prefix)}?: {
    [extraProps: string]: any;
  };`
  },
  singleRequestTypes(action, prefix) {
    return `  ${functionName(action, prefix)}?: {
    [extraProps: string]: any;
  };`
  },
  requestStateTypes(action, prefix) {
    return `${functionName("GET", prefix)}?: {
    [extraProps: string]: any;
  };
  ${functionName("CREATE", prefix)}?: {
    [extraProps: string]: any;
  };
  ${functionName("UPDATE", prefix)}?: {
    [extraProps: string]: any;
  };
  ${functionName("DELETE", prefix)}?: {
    [extraProps: string]: any;
  };`
  },
  requestStateTypesPost(action, prefix) {
    return `${functionName("CREATE", prefix)}?: {
    [extraProps: string]: any;
  };`
  },
  stateTypes(action, prefix, type='any') {
    return `${prefix}Loading?: boolean;
  ${prefix}Saving?: boolean;
  ${prefix}Error?: string;
  ${prefix}?: ${type === 'any'? `{
    [extraProps: string]: any;
  }` : type },`;
  },
  takeLatest(action, prefix) {
    return `takeLatest(Actions.${action}, ${functionName(action, prefix)}),`;
  },
  takeEvery(action, prefix) {
    return `takeEvery(Actions.${action}, ${functionName(action, prefix)}),`;
  },
  // appactions
  getCollection(action, prefix) {
    return `
    ${functionName(action, prefix)}(data:RequestTypes['${functionName(action, prefix)}'], callbacks:Callbacks={}):AnyAction {
        return {
            type: Actions.${action},
            data,
            ...callbacks,
        };
    },
`;
  },
  stateTypesSingle(action, prefix, type='any') {
    return `${prefix}?: ${type === 'any'? `{
    [extraProps: string]: any;
  }` : type },`;
  },
  get(action, prefix) {
    return `
  ${functionName(action, prefix)}(data:RequestTypes['${functionName(action, prefix)}'], callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.${action},
      data,
      ...callbacks,
    };
  },
`;
  },
  delete(action, prefix) {
    return `
  ${functionName(action, prefix)}(data:RequestTypes['${functionName(action, prefix)}'], callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.${action},
      data,
      ...callbacks,
    };
  },
`;
  },
  post(action, prefix) {
    return `
  ${functionName(action, prefix)}(data:RequestTypes['${functionName(action, prefix)}'], callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.${action},
      data,
      ...callbacks,
    };
  },
`;
  },
  update(action, prefix) {
    return `
  ${functionName(action, prefix)}(data:RequestTypes['${functionName(action, prefix)}'], callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.${action},
      data,
      ...callbacks,
    };
  },
`;
  },
  // reducer
  reducerSingle(action, prefix) {
    return `case Actions.${action}:
        const actionData:RequestTypes['${functionName(action, prefix)}'] = action.data;
        state['${prefix}'] = actionData;
      return state;`
  },
  reducerCollection(action, prefix) {
    return `case Actions.${action}:
      return itemLoading(state, '${prefix}');
    case Actions.${action}_LOADED:
      return itemLoaded(state, '${prefix}', action);
    case Actions.${action}_ERROR:
      return itemError(state, '${prefix}', action);`;
  },
  reducerGet(action, prefix) {
    return `case Actions.${action}:
      return itemLoading(state, '${prefix}');
    case Actions.${action}_LOADED:
      return itemLoaded(state, '${prefix}', action);
    case Actions.${action}_ERROR:
      return itemError(state, '${prefix}', action);`;
  },
  reducerPost(action, prefix) {
    return `case Actions.${action}:
      return itemSaving(state, '${prefix}');
    case Actions.${action}_LOADED:
      return itemSaved(state, '${prefix}', action);
    case Actions.${action}_ERROR:
      return itemError(state, '${prefix}', action);`;
  },
  reducerUpdate(action, prefix) {
    return `case Actions.${action}:
      return itemSaving(state, '${prefix}');
    case Actions.${action}_LOADED:
      return itemSaved(state, '${prefix}', action);
    case Actions.${action}_ERROR:
      return itemError(state, '${prefix}', action);`;
  },
  // yield
  yieldCollection(action, prefix, api) {
    return `export function* ${functionName(action, prefix)}(action:IAction<RequestTypes['${functionName(action,prefix)}']>) {
  yield getAction<RequestTypes['${functionName(action,prefix)}'], AppState['${prefix}']>
  (action, \`\${getApi().getAPIBaseUrl()}${apiName(api)}\`, '${action}');
}
`;
    },
  yieldGet(action, prefix, api) {
    return `export function* ${functionName(action, prefix)}(action:IAction<RequestTypes['${functionName(action,prefix)}']>) {
  yield getAction<RequestTypes['${functionName(action,prefix)}'], AppState['${prefix}']>
  (action, \`\${getApi().getAPIBaseUrl()}${apiName(api)}\`, '${action}');
}
`;
  },
    yieldDelete(action, prefix, api) {
      return `export function* ${functionName(action, prefix)}(action:IAction<RequestTypes['${functionName(action,prefix)}']>) {
  yield deleteAction<RequestTypes['${functionName(action,prefix)}'], AppState['${prefix}']>
  (action, \`\${getApi().getAPIBaseUrl()}${apiName(api)}\`, '${action}');
}
`;
    },
    yieldPost(action, prefix, api) {
      return `export function* ${functionName(action, prefix)}(action:IAction<RequestTypes['${functionName(action,prefix)}']>) {
  yield postAction<RequestTypes['${functionName(action,prefix)}'], AppState['${prefix}']>
  (action, \`\${getApi().getAPIBaseUrl()}${apiName(api, true)}\`, '${action}');
}`;
    },
    yieldUpdate(action, prefix, api) {
      return `export function* ${functionName(action, prefix)}(action:IAction<RequestTypes['${functionName(action,prefix)}']>) {
  yield updateAction<RequestTypes['${functionName(action,prefix)}'], AppState['${prefix}']>
  (action, \`\${getApi().getAPIBaseUrl()}${apiName(api, true)}\`, '${action}');
}`;
    },
    //  provider
    providerCrud(action, prefix) {
        return `
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState, RequestTypes } from "../types/state-type";
import { useCallback } from 'react';

type Use${functionName('', prefix)}Actions = {
  ${functionName('GET', prefix)}: (data:RequestTypes['${functionName("GET", prefix)}'], callbacks?:Callbacks)=>void,
  ${functionName('CREATE', prefix)}: (data: RequestTypes['${functionName("CREATE", prefix)}'], callbacks?:Callbacks)=>void,
  ${functionName('UPDATE', prefix)}: (data: RequestTypes['${functionName("UPDATE", prefix)}'], callbacks?:Callbacks)=>void,
  ${functionName('DELETE', prefix)}: (data:RequestTypes['${functionName("DELETE", prefix)}'], callbacks?:Callbacks)=>void,
}
type Use${functionName('', prefix)} = Use${functionName('', prefix)}Actions & {
  ${prefix}: AppState['${prefix}'],
  ${prefix}Loading: AppState['${prefix}Loading'],
  ${prefix}Saving: AppState['${prefix}Saving'],
  ${prefix}Error: AppState['${prefix}Error'],
}

export function ${functionName('USE', prefix)}Actions():Use${functionName('', prefix)}Actions {
  const dispatch = useDispatch();
  
  const ${functionName('GET', prefix)} = useCallback((data:RequestTypes['${functionName("GET", prefix)}'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('GET', prefix)}(data,callbacks))
  },[dispatch]);
  
  const ${functionName('CREATE', prefix)} = useCallback((data: RequestTypes['${functionName("CREATE", prefix)}'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('CREATE', prefix)}(data,callbacks))
  },[dispatch]);
  
  const ${functionName('UPDATE', prefix)} = useCallback((data:RequestTypes['${functionName("UPDATE", prefix)}'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('UPDATE', prefix)}(data,callbacks))
  },[dispatch]);
  
  const ${functionName('DELETE', prefix)} = useCallback((data:RequestTypes['${functionName("DELETE", prefix)}'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('DELETE', prefix)}(data,callbacks))
  },[dispatch]);
  
  return {
    ${functionName('GET', prefix)},
    ${functionName('CREATE', prefix)},
    ${functionName('UPDATE', prefix)},
    ${functionName('DELETE', prefix)},
  }
}
export default function ${functionName('USE', prefix)}():Use${functionName('', prefix)} {
  const {
    ${prefix}, ${prefix}Loading, ${prefix}Saving, ${prefix}Error } = useSelector((state:AppState)=>({
    ${prefix}: state.${prefix},
    ${prefix}Loading: state.${prefix}Loading,
    ${prefix}Saving: state.${prefix}Saving,
    ${prefix}Error: state.${prefix}Error,
  }));
  
  const {
    ${functionName('GET', prefix)},
    ${functionName('CREATE', prefix)},
    ${functionName('UPDATE', prefix)},
    ${functionName('DELETE', prefix)},
  } = ${functionName('USE', prefix)}Actions()

  return {
    ${prefix},
    ${prefix}Loading,
    ${prefix}Saving,
    ${prefix}Error,
    ${functionName('GET', prefix)},
    ${functionName('CREATE', prefix)},
    ${functionName('UPDATE', prefix)},
    ${functionName('DELETE', prefix)},
  }
}
`;
  },
  providerPost(action, prefix) {
    return `
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState, RequestTypes } from "../types/state-type";
import { useCallback } from 'react';

type Use${functionName('', prefix)}Actions = {
  ${functionName('CREATE', prefix)}: (data: RequestTypes['${functionName("CREATE", prefix)}'], callbacks?:Callbacks)=>void,
}

type Use${functionName('', prefix)} = Use${functionName('', prefix)}Actions & {
  ${prefix}: AppState['${prefix}'],
  ${prefix}Loading: AppState['${prefix}Loading'],
  ${prefix}Saving: AppState['${prefix}Saving'],
  ${prefix}Error: AppState['${prefix}Error'],
}

export function ${functionName('USE', prefix)}Actions():Use${functionName('', prefix)}Actions {
  const dispatch = useDispatch();

  const ${functionName('CREATE', prefix)} = useCallback((data: RequestTypes['${functionName("CREATE", prefix)}'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('CREATE', prefix)}(data,callbacks))
  },[dispatch]);

  return {
    ${functionName('CREATE', prefix)}
  }
}

export default function ${functionName('USE', prefix)}():Use${functionName('', prefix)} {
  const {
    ${prefix}, ${prefix}Loading, ${prefix}Saving, ${prefix}Error } = useSelector((state:AppState)=>({
    ${prefix}: state.${prefix},
    ${prefix}Loading: state.${prefix}Loading,
    ${prefix}Saving: state.${prefix}Saving,
    ${prefix}Error: state.${prefix}Error,
  }));
    const {${functionName('CREATE', prefix)}} = ${functionName('USE', prefix)}Actions()

  return {
    ${prefix},
    ${prefix}Loading,
    ${prefix}Saving,
    ${prefix}Error,
    ${functionName('CREATE', prefix)},
  }
}
`;
  },
  providerCollection(action, prefix) {
    return`
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState, RequestTypes } from "../types/state-type";
import { useCallback } from 'react';


type Use${functionName('', prefix)}Actions = {
  ${functionName('GET', prefix)}: (data:RequestTypes['${functionName("GET", prefix)}'], callbacks?:Callbacks)=>void,
}

type Use${functionName('', prefix)} = Use${functionName('', prefix)}Actions & {
  ${prefix}: AppState['${prefix}'],
  ${prefix}Loading: AppState['${prefix}Loading'],
  ${prefix}Error: AppState['${prefix}Error'],
}

export function ${functionName('USE', prefix)}Actions():Use${functionName('', prefix)}Actions {
  const dispatch = useDispatch();
  const ${functionName('GET', prefix)} = useCallback((data:RequestTypes['${functionName("GET", prefix)}'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('GET', prefix)}(data, callbacks))
  },[dispatch])
  return {
    ${functionName('GET', prefix)},
}
}

export default function ${functionName('USE', prefix)}():Use${functionName('', prefix)} {
  const {${functionName('GET', prefix)}} = ${functionName('USE', prefix)}Actions()
  const {
    ${prefix}, ${prefix}Loading, ${prefix}Error } = useSelector((state:AppState)=>({
  ${prefix}: state.${prefix},
  ${prefix}Loading: state.${prefix}Loading,
    ${prefix}Error: state.${prefix}Error,
}));
  return {
    ${prefix},
    ${prefix}Loading,
    ${prefix}Error,
    ${functionName('GET', prefix)},
}
}
`;
  },
  providerSingle(action, prefix) {
    return`
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState, RequestTypes } from "../types/state-type";
import { useCallback } from 'react';

type Use${functionName('', prefix)}Actions = {
  ${functionName(action, prefix)}: (data:RequestTypes['${functionName(action, prefix)}'], callbacks?:Callbacks)=>void,
}

type Use${functionName('', prefix)} = Use${functionName('', prefix)}Actions & {
  ${prefix}: AppState['${prefix}'],
}

export function ${functionName('USE', prefix)}Actions():Use${functionName('', prefix)}Actions {
  const dispatch = useDispatch();
  const ${functionName(action, prefix)} = useCallback((data:RequestTypes['${functionName(action, prefix)}'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName(action, prefix)}(data, callbacks))
  },[dispatch])
  return {
    ${functionName(action, prefix)}
}
}

export default function ${functionName('USE', prefix)}():Use${functionName('', prefix)} {
  const {
    ${prefix}, } = useSelector((state:AppState)=>({
    ${prefix}: state.${prefix},
  }));
  const {${functionName(action, prefix)}} = ${functionName('USE', prefix)}Actions()

  return {
    ${prefix},
    ${functionName(action, prefix)},
  }
}
`;
  },
};
