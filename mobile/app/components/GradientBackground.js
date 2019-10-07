// import propTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class TheComponent extends PureComponent {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
        style: propTypes.any,
    };

    render() {
        // const { props } = this;
        return (
            <LinearGradient style={[{ flex: 1 }, this.props.style]} colors={['#20a0df', 'white']}>
                {this.props.children}
            </LinearGradient>
        );
    }
}
