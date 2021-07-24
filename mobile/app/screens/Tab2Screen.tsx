import React from "react";
import { Component } from "react";
import ScreenContainer from 'components/ScreenContainer';
import withScreen, { Screen } from "./withScreen";

type Tab2Screen = Screen & {
}

const Tab2Screen: React.FC<Tab2Screen> = ({ children }) => {
  return (
      <ScreenContainer style={Styles.body}>
        <Text>I am the Tab2Screen</Text>
      </ScreenContainer>
  );
};

export default withScreen(Tab2Screen);
