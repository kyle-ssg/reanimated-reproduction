import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const Column = window.Column = ({className, children, ...rest}) => (
    <div
        {...rest}
        className={cn({
            'flex-column': true,
        }, className)}>
        {children}
    </div>
);

Column.defaultProps = {};

Column.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    children: propTypes.node,
    style: propTypes.any
};