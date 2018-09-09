/**
 * Created by kylejohnson on 24/07/2016.
 */
import cn from 'classnames';
import React from 'react';
import propTypes from 'prop-types';

var Row = window.Row = (props) => {
  const { space, ...rest } = props;

  return (
    <div
      {... rest}
      className={cn({
        'flex-row': true,
        space: props.space
      }, props.className)}>
      {props.children}
    </div>
  )
};

Row.displayName = 'Row';

Row.propTypes = {
  className: propTypes.string,
  space: propTypes.bool,
  children: propTypes.node,
  style: propTypes.any
};