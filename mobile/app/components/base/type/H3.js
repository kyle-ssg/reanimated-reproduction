/**
 * Created by kylejohnson on 13/05/2036.
 */
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

const h3 = class extends PureComponent {
    static displayName = 'H3';

    render() {
        return (
            <Text accessible={this.props.accessible} accessibilityLabel={this.props.accessibilityLabel} style={[Styles.h3, this.props.style]}>{this.props.children}</Text>
        );
    }
};

h3.propTypes = {
    accessible: propTypes.bool,
    accessibilityLabel: propTypes.string,
    style: propTypes.any,
    children: propTypes.node,
};

module.exports = h3;
