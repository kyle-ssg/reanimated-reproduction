import React, { Component } from 'react';
import propTypes from 'prop-types';

const Loader = class extends Component {
    static displayName = 'Loader';

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

export default Loader;
