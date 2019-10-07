/**
 * Created by kylejohnson on 04/05/2016.
 */
import React, { PureComponent } from 'react';

const h2 = class extends PureComponent {
    static displayName = 'H2';

    render() {
        return (
            <Text {...this.props} style={[Styles.h2, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
};

h2.propTypes = {
    style: propTypes.any,
    children: OptionalElement,
};

module.exports = h2;
