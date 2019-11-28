/**
 * Created by kylejohnson on 11/05/2016.
 */
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

const Bold = class extends PureComponent {
    static displayName = 'Bold';

    render() {
        return (
            <Text style={[Styles.bold, this.props.style]}>{this.props.children}</Text>
        );
    }
};

Bold.propTypes = {
    style: propTypes.any,
    children: propTypes.node,
};

module.exports = Bold;
