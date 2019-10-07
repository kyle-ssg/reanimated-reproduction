/**
 * Created by kylejohnson on 11/05/2016.
 */
/**
 * Created by kylejohnson on 04/05/2016.
 */
import React, { PureComponent } from 'react';

const h1 = class extends PureComponent {
    static displayName = 'H1';

    render() {
        return (
            <Text {...this.props} style={[Styles.h1, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
};

h1.propTypes = {
    style: propTypes.any,
    children: OptionalElement,
};

module.exports = h1;
