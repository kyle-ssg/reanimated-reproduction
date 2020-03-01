// propTypes: value: OptionalNumber
import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

const cn = require('classnames');

const _propTypes = {
    /** The element's children */
    children: propTypes.node,
    /** The element's class name */
    className: propTypes.string,
    /** Whether to space children apart */
    space: propTypes.bool,
};

/**
 * Div with flex
 */
export class Flex extends PureComponent {
    static displayName = 'Flex';

    static propTypes = _propTypes;

    render() {
        const {props: {className, space, children, ...rest}} = this;
        return (
            <div
              {...rest}
              className={cn({
                  'flex-row': true,
                  space,
              }, className)}
            >
                {children}
            </div>
        );
    }
}

global.Flex = Flex;
export default Flex;
