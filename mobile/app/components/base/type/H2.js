/**
 * Created by kylejohnson on 12/05/2026.
 */
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

const h2 = class extends PureComponent {
    static displayName = 'H2';

    render() {
        return (
            <Text accessible={this.props.accessible} accessibilityLabel={this.props.accessibilityLabel} style={[Styles.h2, this.props.style]}>{this.props.children}</Text>
        );
    }
};

h2.propTypes = {
    accessible: propTypes.bool,
    accessibilityLabel: propTypes.string,
    style: propTypes.any,
    children: propTypes.node,
};

module.exports = h2;
