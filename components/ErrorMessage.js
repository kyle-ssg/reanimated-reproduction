import React, { Component } from 'react';
import propTypes from 'prop-types';
import './error-message.scss';

const ErrorMessage = class extends Component {
    static displayName = 'ErrorMessage';

    static propTypes = {
        children: propTypes.node.isRequired,
        className: propTypes.string,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const { props: { children } } = this;
        return (
            <div className={`alert alert-danger ${this.props.className || ''}`}>
                {children}
            </div>
        );
    }
};

export default ErrorMessage;
