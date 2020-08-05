// propTypes: value: OptionalNumber
import React, { Component } from "react";
import propTypes from "prop-types";
import { View } from "react-native";

export default class Flex extends Component {
  render() {
    return (
        <View
          accessible={this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          style={[
          this.props.style,
          { flex: this.props.value },
          this.props.space && { justifyContent: "space-between" },
        ]}
          testID={this.props.testID}
        >
            {this.props.children}
        </View>
    );
  }
}

Flex.defaultProps = {
  value: 1,
};

Flex.propTypes = {
  accessible: propTypes.number,
  accessibilityLabel: propTypes.string,
  value: propTypes.number,
  children: propTypes.node,
  style: propTypes.any,
  testID: propTypes.string,
  space: propTypes.bool,
};
