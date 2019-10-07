/**
 * Created by kylejohnson on 11/05/2016.
 */
import React, { PureComponent } from 'react';

const h4 = class extends PureComponent {
    static displayName = 'H4';

    render() {
        return (
            <Text style={[Styles.h4, this.props.style]}>{this.props.children}</Text>
        );
    }
};

h4.propTypes = {
    style: propTypes.any,
    children: OptionalElement,
};

module.exports = h4;
