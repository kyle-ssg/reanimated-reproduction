
import React, { Component } from 'react';
import propTypes from 'prop-types';
import withFoo from '../common/providers/withFoo';
import ErrorMessage from './ErrorMessage';

class Foo extends Component {
    static displayName = 'Foo';

    static propTypes = {
        id: propTypes.string,
        fooLoading: propTypes.bool,
        fooError: propTypes.any,
        getFoo: propTypes.func,
    };

    componentDidMount() {
        if (this.props.id) { // Retrieve the item to edit
            this.props.getFoo(this.props.id);
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.id !== this.props.id && newProps.id) { // If the id has changed, fetch the new item
            newProps.getFoo(newProps.id);
        }
    }

    render() {
        const { props: { foo, fooLoading, fooError } } = this;
        return <>
            { JSON.stringify(foo) }
            {fooError && (
                <ErrorMessage>{fooError}</ErrorMessage>
            )}
        </>;
    }
}

export default withFoo(Foo);
