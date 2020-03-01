import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

const _propTypes = {
    /** What class to add to the component */
    className: propTypes.string,
    /** The element's children */
    children: propTypes.node,
};

/**
 * The Component
 */
export class TheComponent extends PureComponent {
    static displayName = 'TheComponent';

    static propTypes = _propTypes;

    render() {
        const {props: {className, children}} = this;
        return (
            <div className={cn(className, 'some-custom-class')}>{children}</div>
        );
    }
}

export default TheComponent;
