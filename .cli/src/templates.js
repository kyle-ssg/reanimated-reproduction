const functionName = function (action, prefix) {
    const post = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    const actionParts = action.split('_');
    return actionParts[0].toLowerCase() + post;
};

const apiName = function (api, isUpdate) {
    // eslint-disable-next-line no-template-curly-in-string
    const replace = '${action.data.id}';
    if (api.charAt(0) === '/') {
        return api.slice(1).replace(':id', replace);
    }
    // eslint-disable-next-line no-template-curly-in-string
    return api.replace(':id', replace);
};

module.exports = {
    action(action) {
        return `  '${action}': '${action}',
  '${action}_LOADED': '${action}_LOADED',
  '${action}_ERROR': '${action}_ERROR',
`;
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
    ${functionName(action, prefix)}(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
        return {
            type: Actions.${action},
            data,
            ...callbacks,
        };
    },
`;
    },
    get(action, prefix) {
        return `
  ${functionName(action, prefix)}(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
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
  ${functionName(action, prefix)}(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.${action},
      id,
      ...callbacks,
    };
  },
`;
    },
    post(action, prefix) {
        return `
  ${functionName(action, prefix)}(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
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
  ${functionName(action, prefix)}(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.${action},
      data,
      ...callbacks,
    };
  },
`;
    },
    // reducer
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
    reducerDelete(action, prefix) {
        return `case Actions.${action}:
      return itemSaving(state, '${prefix}');
    case Actions.${action}_LOADED:
      return itemSaved(state, '${prefix}', action);
    case Actions.${action}_ERROR:
      return itemError(state, '${prefix}', action);`;
    },
    // yield
    yieldCollection(action, prefix, api) {
        return `
export function* ${functionName(action, prefix)}(action) {
  yield getAction(action, \`\${Project.api}${apiName(api)}\`, '${action}');
}
`;
    },
    yieldGet(action, prefix, api) {
        return `
export function* ${functionName(action, prefix)}(action) {
  yield getAction(action, \`\${Project.api}${apiName(api)}\`, '${action}');
}`;
    },
    yieldDelete(action, prefix, api) {
        return `
export function* ${functionName(action, prefix)}(action) {
  yield deleteAction(action, \`\${Project.api}${apiName(api)}\`, '${action}');
}`;
    },
    yieldPost(action, prefix, api) {
        return `
export function* ${functionName(action, prefix)}(action) {
  yield postAction(action, \`\${Project.api}${apiName(api, true)}\`, '${action}');
}`;
    },
    yieldUpdate(action, prefix, api) {
        return `
export function* ${functionName(action, prefix)}(action) {
  yield updateAction(action, \`\${Project.api}${apiName(api, true)}\`, '${action}');
}`;
    },
    //  provider
    providerItem(action, prefix) {
        return `
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState } from "../state-type";
import { useCallback } from 'react';

type Use${functionName('', prefix)} = {
  ${prefix}: AppState['${prefix}'],
  ${prefix}Loading: AppState['${prefix}Loading'],
  ${prefix}Saving: AppState['${prefix}Saving'],
  ${prefix}Error: AppState['${prefix}Error'],
  ${functionName('GET', prefix)}: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  ${functionName('CREATE', prefix)}: (data: Record<string, any>, callbacks?:Callbacks)=>void,
  ${functionName('UPDATE', prefix)}: (data: Record<string, any>, callbacks?:Callbacks)=>void,
  ${functionName('DELETE', prefix)}: (data:Record<string, any>,, callbacks?:Callbacks)=>void,
}

export default function ${functionName('USE', prefix)}():Use${functionName('', prefix)} {
  const {
    ${prefix}, ${prefix}Loading, ${prefix}Saving, ${prefix}Error } = useSelector((state:AppState)=>({
    ${prefix}: state.${prefix},
    ${prefix}Loading: state.${prefix}Loading,
    ${prefix}Saving: state.${prefix}Saving,
    ${prefix}Error: state.${prefix}Error,
  }));
  const dispatch = useDispatch();
  
  const ${functionName('GET', prefix)} = useCallback((id:string, callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('GET', prefix)}(id,callbacks))
  },[dispatch]);
  
  const ${functionName('CREATE', prefix)} = useCallback((data: Record<string, any>, callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('CREATE', prefix)}(data,callbacks))
  },[dispatch]);
  
  const ${functionName('UPDATE', prefix)} = useCallback((data: Record<string, any>, callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('UPDATE', prefix)}(data,callbacks))
  },[dispatch]);
  
  const ${functionName('DELETE', prefix)} = useCallback((id:string, callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('DELETE', prefix)}(id,callbacks))
  },[dispatch]);
  
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
    providerCollection(action, prefix) {
        return`
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState } from "../state-type";
import { useCallback } from 'react';

type Use${functionName('', prefix)} = {
  ${prefix}: AppState['${prefix}'],
  ${prefix}Loading: AppState['${prefix}Loading'],
  ${prefix}Error: AppState['${prefix}Error'],
  ${functionName('GET', prefix)}: (callbacks?:Callbacks)=>void,
}

export default function ${functionName('USE', prefix)}():Use${functionName('', prefix)} {
  const {
    ${prefix}, ${prefix}Loading, ${prefix}Error } = useSelector((state:AppState)=>({
    ${prefix}: state.${prefix},
    ${prefix}Loading: state.${prefix}Loading,
    ${prefix}Error: state.${prefix}Error,
  }));
  const dispatch = useDispatch();
  const ${functionName('GET', prefix)} = useCallback((callbacks?:Callbacks)=>{
    return dispatch(AppActions.${functionName('GET', prefix)}(callbacks))
  },[dispatch])
  return {
    ${prefix},
    ${prefix}Loading,
    ${prefix}Error,
    ${functionName('GET', prefix)},
  }
}
`;
    },
    webGet(action, prefix) {
      const prefixCamel = functionName('', prefix);
      return `
import React, { FC,useEffect } from 'react'; // we need this to make JSX compile

import use${prefixCamel} from '../common/providers/${functionName('use', prefix)}';

type ComponentType = {

}

const ${prefixCamel}:FC<ComponentType> = ({ id:string }) => {
  const { ${prefix}, get${prefixCamel}, ${prefix}Loading, ${prefix}Error } = use${prefixCamel}()
  useEffect(()=>{
    get${prefixCamel}(id)
  }, [get${prefixCamel}, id])
  return (
      <>
        <h2>${prefix}</h2>
            {!${prefix} && ${prefix}Loading && <Loader/>}
            { ${prefix} &&
             <div>{JSON.stringify(${prefix})}</div>
            }
            {${prefix}Error && (
                <ErrorMessage>{${prefix}Error}</ErrorMessage>
            )}
      </>
  )
}

${prefixCamel}.displayName = "${prefixCamel}"
export default ${prefixCamel};
`;
    },
    webCollection(action, prefix) {
        const prefixCamel = functionName('', prefix);
        return `
import React, { FC,useEffect } from 'react'; // we need this to make JSX compile

import use${prefixCamel} from '../common/providers/${functionName('use', prefix)}';

type ComponentType = {

}

const ${prefixCamel}:FC<ComponentType> = ({  }) => {
  const { ${prefix}, get${prefixCamel}, ${prefix}Loading, ${prefix}Error } = use${prefixCamel}();
  useEffect(()=>{
    get${prefixCamel}()
  },[])
  return (
      <>
        <h2>${prefix}</h2>
            {!${prefix} && ${prefix}Loading && <Loader/>}
            {
                ${prefix} && ${prefix}.map((item, i)=>(
                    <div key={item.id || i}>{JSON.stringify(item)}</div>
                ))
            }
            {${prefix}Error && (
                <ErrorMessage>{${prefix}Error}</ErrorMessage>
            )}
      </>
  )
}

${prefixCamel}.displayName = "${prefixCamel}"
export default ${prefixCamel};
`;
    },
    webPost(action, prefix) {
        const prefixCamel = functionName('', prefix);
        return `
import React, { FC, useEffect, useState } from 'react'; // we need this to make JSX compile
import cloneDeep from 'lodash/cloneDeep';

import use${prefixCamel} from '../common/providers/${functionName('use', prefix)}';

type ComponentType = {
  id: string
}

const ${prefixCamel}:FC<ComponentType> = ({ id }) => {
  const [${prefix}Edit, set${prefixCamel}Edit] = useState<any>({})
  const [${prefix}Success, set${prefixCamel}Success] = useState<boolean>(false)
  const { ${prefix}Loading, ${prefix}Saving, ${prefix}Error, create${prefixCamel}, get${prefixCamel}, update${prefixCamel} } = use${prefixCamel}()
  
  const onRetrieved${prefixCamel} = (${prefix}) => { // Create a copy of the item once retrieved for edit
    set${prefixCamel}Edit(cloneDeep(${prefix}));
  }
  
  const submit = (e) => {
    Utils.preventDefault(e);
    set${prefixCamel}Success(false);
    if (id) {
      update${prefixCamel}(${prefix}Edit, {
        onSuccess: () => {
          set${prefixCamel}Success(true)
        },
      });
    } else {
      create${prefixCamel}(this.state.${prefix}Edit, {
        onSuccess: () => {
          set${prefixCamel}Success(true)
        },
      });
    }
  }
  
  useEffect(()=>{
    if (id) {
      ${functionName('GET', prefix)}(id, {
        onSuccess: onRetrieved${prefixCamel},
      });     
    }

  }, [id, ${functionName('GET', prefix)}]);
  
  const { name } = ${prefix}Edit || {};
  const update = this.update${prefixCamel};
  const isEdit = !!this.props.id;
  return <>
      {isEdit ? <h2>Edit ${prefix}</h2> : <h2>Create ${prefix}</h2> }
      {!${prefix}Edit && ${prefix}Loading && <Loader/>}
      {${prefix}Edit ? (
      <form onSubmit={submit}>
          <InputGroup
            className="mb-2"
            title="Name"
            placeholder=""
            value={name}
            onChange={v => update('name', v)}
          />
          {${prefix}Error && (
              <ErrorMessage>{${prefix}Error}</ErrorMessage>
          )}
          {${prefix}Success && !${prefix}Error && (
              <SuccessMessage>Saved</SuccessMessage>
          )}
          { JSON.stringify(${prefix}Edit) }
          {isEdit && <ButtonPrimary disabled={${prefix}Saving} onClick={this.delete}>Delete</ButtonPrimary>}
          <div className="text-right pb-2">
              <ButtonPrimary disabled={${prefix}Saving} type="submit">
                  Save
               </ButtonPrimary>
          </div>
       </form>
      ) : (
        ${prefix}Error && (
             <ErrorMessage>{${prefix}Error}</ErrorMessage>
        ))}
      </>;
}

${prefixCamel}.displayName = "${prefixCamel}"
export default ${prefixCamel};`;
    },
    component(name) {
        return `import React, { Component } from 'react';
import propTypes from 'prop-types';

const ${name} = class extends Component {
    static displayName = '${name}';

    static propTypes = {};

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>Hi</div>
        );
    }
};

export default ${name};
`;
    },
};
