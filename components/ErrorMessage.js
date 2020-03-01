import React, {Component} from 'react';
import propTypes from 'prop-types';

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
        return (
            <div className={`alert mt-1 mb-1 alert-danger ${this.props.className || ''}`}>
                {typeof this.props.children === 'string' ? this.props.children.replace(/\n/g, '') : 'Error processing request'}
            </div>
        );
    }
};
global.ErrorMessage = ErrorMessage;
export default ErrorMessage;
