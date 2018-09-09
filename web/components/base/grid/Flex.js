//propTypes: value: OptionalNumber
const cn = require('classnames');
import React from 'react';
import propTypes from 'prop-types';

const Flex = window.Flex = ({className, children, value, ...rest}) => (
    <div
        {...rest}
        className={cn({
            'flex': true,
        }, "flex-" + value, className)}>
        {children}
    </div>
);

Flex.defaultProps = {
    value: 1
};

Flex.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    children: propTypes.node,
    style: propTypes.any
};