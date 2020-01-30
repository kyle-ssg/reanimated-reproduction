
import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import propTypes from 'prop-types';
import { withRouter } from 'next/router';
import withFoo from '../common/providers/withFoo';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

class EditFoo extends Component {
    static displayName = 'EditFoo';

    static propTypes = {
        id: propTypes.string,
        fooLoading: propTypes.bool,
        fooError: propTypes.any,
        createFoo: propTypes.func,
        getFoo: propTypes.func,
        updateFoo: propTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            fooEdit: props.id ? null : {}, // The object to be sent up to the API
        };
    }

    componentDidMount() {
        if (this.props.id) { // Retrieve the item to edit
            this.props.getFoo(this.props.id, {
                onSuccess: this.onRetrievedFoo,
            });
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.id !== this.props.id && newProps.id) { // If the id has changed, fetch the new item
            this.props.getFoo(newProps.id, {
                onSuccess: this.onRetrievedFoo,
            });
        }
    }

    onRetrievedFoo = (foo) => { // Create a copy of the item once retrieved for edit
        this.setState({ fooEdit: cloneDeep(foo) });
    }

    updateFoo = (index, v) => { // Update a
        this.setState({
            fooEdit: {
                ...this.state.fooEdit,
                [index]: Utils.safeParseEventValue(v),
            },
        });
    }

    submit = (e) => {
        Utils.preventDefault(e);
        this.setState({ fooSuccess: false });
        if (this.props.id) {
            this.props.updateFoo(this.state.fooEdit, {
                onSuccess: () => {
                    this.setState({ fooSuccess: true });
                },
            });
        } else {
            this.props.createFoo(this.state.fooEdit, {
                onSuccess: () => {
                    // Can redirect to edit page here this.props.router.replace('/x/data.id')
                    this.setState({ fooSuccess: true });
                },
            });
        }
    }

    render() {
        const { props: { fooLoading, fooError }, state: { fooSuccess, fooEdit = {} } } = this;
        const { name } = fooEdit || {};
        const update = this.updateFoo;
        const isEdit = !!this.props.id;
        return <>
            {isEdit ? <h2>Edit foo</h2> : <h2>Create foo</h2> }
            {!fooEdit && fooLoading && <Loader/>}
            {fooEdit && (
                <form onSubmit={this.submit}>
                    <InputGroup
                      className="mb-2"
                      title="Name"
                      placeholder=""
                      value={name}
                      onChange={v => update('name', v)}
                    />
                    {fooError && (
                        <ErrorMessage>{fooError}</ErrorMessage>
                    )}
                    {fooSuccess && !fooError && (
                        <SuccessMessage>Saved</SuccessMessage>
                    )}
                    { JSON.stringify(fooEdit) }
                    <div className="text-right pb-2">
                        <ButtonPrimary disabled={fooLoading} type="submit">
                            Save
                        </ButtonPrimary>
                    </div>
                </form>
            )}
        </>;
    }
}

export default withRouter(withFoo(EditFoo));
