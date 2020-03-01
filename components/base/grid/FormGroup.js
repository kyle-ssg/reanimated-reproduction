import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

const _propTypes = {
    /** The element's children */
    children: propTypes.node,
    /** The element's class name */
    className: propTypes.string,
};

/**
 * Div with standard vertical padding
 */
export class Column extends PureComponent {
    static displayName = 'Column';

    static propTypes = _propTypes;

    render() {
        const {props: {className, ...rest}} = this;
        return (
            <div {...rest} className={cn(className, 'form-group')}/>
        );
    }
}

global.Column = Column;
export default Column;
