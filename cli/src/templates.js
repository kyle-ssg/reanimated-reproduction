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

const ${functionName('WITH', prefix)} = (WrappedComponent) => {
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

export default ${functionName('WITH', prefix)};
`
  },
  providerCollection: function (action, prefix) {
    return `
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../app-actions';

const ${functionName('WITH', prefix)} = (WrappedComponent) => {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedComponent);
};

const mapDispatchToProps = dispatch => bindActionCreators({
    ${functionName('GET', prefix)}: AppActions.${functionName('GET', prefix)},
}, dispatch);

function mapStateToProps(state) {
    const { ${prefix}, ${prefix}Loading, ${prefix}Error } = state;
    return { ${prefix}, ${prefix}Loading, ${prefix}Error };
}

export default ${functionName('WITH', prefix)};
`
  },
  webGet: function (action, prefix) {
    const prefixCamel = functionName('', prefix)
    return `
import React, { Component } from 'react';
import propTypes from 'prop-types';
import with${prefixCamel} from '../common/providers/${functionName('WITH', prefix)}';
import ErrorMessage from './ErrorMessage';

class ${prefixCamel} extends Component {
    static displayName = '${prefixCamel}';

    static propTypes = {
        id: propTypes.string,
        ${prefix}Loading: propTypes.bool,
        ${prefix}Error: propTypes.any,
        get${prefixCamel}: propTypes.func,
    };

    componentDidMount() {
        if (this.props.id) { // Retrieve the item to edit
            this.props.${functionName('GET', prefix)}(this.props.id);
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.id !== this.props.id && newProps.id) { // If the id has changed, fetch the new item
            newProps.get${prefixCamel}(newProps.id);
        }
    }

    render() {
        const { props: { ${prefix}, ${prefix}Loading, ${prefix}Error } } = this;
        return <>
            { JSON.stringify(${prefix}) }
            {${prefix}Error && (
                <ErrorMessage>{${prefix}Error}</ErrorMessage>
            )}
        </>;
    }
}

export default with${prefixCamel}(${prefixCamel});
`
  },
  webCollection: function (action, prefix) {
    const prefixCamel = functionName('', prefix)
    return `
import React, { Component } from 'react';
import propTypes from 'prop-types';
import with${prefixCamel} from '../common/providers/${functionName('WITH', prefix)}';
import ErrorMessage from './ErrorMessage';

class ${prefixCamel} extends Component {
    static displayName = '${prefixCamel}';

    static propTypes = {
        ${prefix}Loading: propTypes.bool,
        ${prefix}Error: propTypes.any,
        get${prefixCamel}: propTypes.func,
    };

    componentDidMount() {
        this.props.${functionName('GET', prefix)}();
    }

    render() {
        const { props: { ${prefix}, ${prefix}Loading, ${prefix}Error } } = this;
        return <>
            {
                ${prefix} && ${prefix}.map((item, i)=>(
                    <div key={item.id || i}>{JSON.stringify(item)}</div>
                ))
            }
            {${prefix}Error && (
                <ErrorMessage>{${prefix}Error}</ErrorMessage>
            )}
        </>;
    }
}

export default with${prefixCamel}(${prefixCamel});
`
  },
  webPost: function (action, prefix) {
    const prefixCamel = functionName('', prefix)
    return `
import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import propTypes from 'prop-types';
import { withRouter } from 'next/router';
import with${prefixCamel} from '../common/providers/${functionName('WITH', prefix)}';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

class Edit${prefixCamel} extends Component {
    static displayName = 'Edit${prefixCamel}';

    static propTypes = {
        id: propTypes.string,
        ${prefix}Loading: propTypes.bool,
        ${prefix}Error: propTypes.any,
        create${prefixCamel}: propTypes.func,
        get${prefixCamel}: propTypes.func,
        update${prefixCamel}: propTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            ${prefix}Edit: props.id ? null : {}, // The object to be sent up to the API
        };
    }

    componentDidMount() {
        if (this.props.id) { // Retrieve the item to edit
            this.props.${functionName('GET', prefix)}(this.props.id, {
                onSuccess: this.onRetrieved${prefixCamel},
            });
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.id !== this.props.id && newProps.id) { // If the id has changed, fetch the new item
            this.props.get${prefixCamel}(newProps.id, {
                onSuccess: this.onRetrieved${prefixCamel},
            });
        }
    }

    onRetrieved${prefixCamel} = (${prefix}) => { // Create a copy of the item once retrieved for edit
        this.setState({ ${prefix}Edit: cloneDeep(${prefix}) });
    }

    update${prefixCamel} = (index, v) => { // Update a
        this.setState({
            ${prefix}Edit: {
                ...this.state.${prefix}Edit,
                [index]: Utils.safeParseEventValue(v),
            },
        });
    }

    submit = (e) => {
        Utils.preventDefault(e);
        this.setState({ ${prefix}Success: false });
        if (this.props.id) {
            this.props.update${prefixCamel}(this.state.${prefix}Edit, {
                onSuccess: () => {
                    this.setState({ ${prefix}Success: true });
                },
            });
        } else {
            this.props.create${prefixCamel}(this.state.${prefix}Edit, {
                onSuccess: () => {
                    // Can redirect to edit page here this.props.router.replace('/x/data.id')
                    this.setState({ ${prefix}Success: true });
                },
            });
        }
    }

    render() {
        const { props: { ${prefix}Loading, ${prefix}Error }, state: { ${prefix}Success, ${prefix}Edit = {} } } = this;
        const { name } = ${prefix}Edit || {};
        const update = this.update${prefixCamel};
        return <>
            {!${prefix}Edit && ${prefix}Loading && <Loader/>}
            {${prefix}Edit && (
                <form onSubmit={this.submit}>
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
                    <div className="text-right pb-2">
                        <ButtonPrimary disabled={${prefix}Loading} type="submit">
                            Save
                        </ButtonPrimary>
                    </div>
                </form>
            )}
        </>;
    }
}

export default withRouter(with${prefixCamel}(Edit${prefixCamel}));
`
  },
  component: function (name) {
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
`
  },
}
