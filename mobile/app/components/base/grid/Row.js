import React from 'react';
import propTypes from 'prop-types';

const Row = (props) => (
    <View
      style={[
          Styles.row,
          props.space && { justifyContent: 'space-between' },
          props.noWrap && { flexWrap: 'nowrap' },
          props.style,
      ]}
    >
        {props.children}
    </View>
);

Row.displayName = 'Row';

Row.propTypes = {
    children: propTypes.node,
    space: propTypes.bool,
    noWrap: propTypes.bool,
    style: propTypes.any,
};

module.exports = Row;
