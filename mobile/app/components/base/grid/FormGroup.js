import React from "react";
import propTypes from "prop-types";

const FormGroup = ({ style, children }) => (
  <View style={[Styles.pv5, style]}>{children}</View>
);

FormGroup.displayName = "FormGroup";

FormGroup.propTypes = {
  children: propTypes.node,
  style: propTypes.any,
};

module.exports = FormGroup;
