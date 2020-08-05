import React from "react";
import propTypes from "prop-types";
import { View } from "react-native";

const Row = (props) => (
  <View
    style={[
      styles.row,
      props.space && { justifyContent: "space-between" },
      props.style,
    ]}
  >
    {props.children}
  </View>
);

Row.displayName = "Row";

Row.propTypes = {
  children: propTypes.node,
  space: propTypes.bool,
  noWrap: propTypes.bool,
  style: propTypes.any,
};

const styles = ReactNative.StyleSheet.create({
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
});

module.exports = Row;
