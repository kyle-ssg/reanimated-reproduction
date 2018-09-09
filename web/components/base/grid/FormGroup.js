import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const FormGroup = window.FormGroup = ({className, children, ...rest}) => (
    <div
        {...rest}
        className={cn({
            'form-group': true,
        }, className)}>
        {children}
    </div>
);

FormGroup.defaultProps = {};

FormGroup.propTypes = {
    className: propTypes.string,
    children: propTypes.node
};