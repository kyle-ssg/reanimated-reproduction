import React from "react";
import { Component } from "react";
import withScreen, { Screen } from "./withScreen";
import ScreenContainer from 'components/ScreenContainer';

interface GenericScreen {
  text: string;
  style: ReactNative.ViewStyle;
  children?: any;
}

const GenericScreen: React.FC<GenericScreen> = ({ children }) => {
  return (
    children || (
      <ScreenContainer testID="welcome">
        <Text>I am a generic screen</Text>
      </ScreenContainer>
    )
  );
};

export default withScreen(GenericScreen);
