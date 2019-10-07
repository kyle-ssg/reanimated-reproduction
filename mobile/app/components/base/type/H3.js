/**
 * Created by kylejohnson on 04/05/2016.
 */
import React, { PureComponent } from 'react';

const h3 = class extends PureComponent {
    static displayName = 'H3';

    render() {
        return (
            <Text {...this.props} style={[Styles.h3, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
};

h3.propTypes = {
    style: propTypes.any,
    children: OptionalElement,
};

export default h3;
