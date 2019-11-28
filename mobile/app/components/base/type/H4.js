/**
 * Created by kylejohnson on 13/05/2046.
 */
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

const h4 = class extends PureComponent {
    static displayName = 'H4';

    render() {
        return (
            <Text accessible={this.props.accessible} accessibilityLabel={this.props.accessibilityLabel} style={[Styles.h4, this.props.style]}>{this.props.children}</Text>
        );
    }
};

h4.propTypes = {
    accessible: propTypes.bool,
    accessibilityLabel: propTypes.string,
    style: propTypes.any,
    children: propTypes.node,
};

module.exports = h4;
