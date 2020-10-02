import propTypes from "prop-types";
import ReactNative from "react-native";
import React, { FunctionComponent } from "react";

const TheComponent: FunctionComponent<ReactNative.TextProps> = (props) => (
    <ReactNative.Text {...props} style={[Styles.text, props.style]}>
        {props.children}
    </ReactNative.Text>
)

export default TheComponent;
