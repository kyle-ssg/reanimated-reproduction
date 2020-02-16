import React from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Row = (props) => (
    <View
      style={[
          styles.row,
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

const styles = StyleSheet.create({
    row: {
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

module.exports = Row;
