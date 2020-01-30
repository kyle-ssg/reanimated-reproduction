
import React, { Component } from 'react';
import propTypes from 'prop-types';
import withFoos from '../common/providers/withFoos';
import ErrorMessage from './ErrorMessage';

class Foos extends Component {
    static displayName = 'Foos';

    static propTypes = {
        foosLoading: propTypes.bool,
        foosError: propTypes.any,
        getFoos: propTypes.func,
    };

    componentDidMount() {
        this.props.getFoos();
    }

    render() {
        const { props: { foos, foosLoading, foosError } } = this;
        return <>
            <h2>foos</h2>
            {
                foos && foos.map((item, i)=>(
                    <div key={item.id || i}>{JSON.stringify(item)}</div>
                ))
            }
            {foosError && (
                <ErrorMessage>{foosError}</ErrorMessage>
            )}
        </>;
    }
}

export default withFoos(Foos);
