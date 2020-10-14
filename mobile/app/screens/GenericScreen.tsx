import React from "react";
import { Component } from "react";
import withScreen, { Screen } from "./withScreen";

interface GenericScreen {
  text: string;
  style: ReactNative.ViewStyle;
  children?: any;
}

const GenericScreen: React.FC<GenericScreen> = ({ children }) => {
  return (
    children || (
      <Flex style={Styles.body}>
        <Text>I am a generic screen</Text>
      </Flex>
    )
  );
};

export default withScreen(GenericScreen);
