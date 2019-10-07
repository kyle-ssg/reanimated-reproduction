import React from 'react';
import propTypes from 'prop-types';

const Row = props => (
    <View
      style={[
          Styles.row,
          props.space && { justifyContent: 'space-between' },
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
    style: propTypes.object,
};

module.exports = Row;
