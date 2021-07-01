import React, { Component, FunctionComponent } from "react";
import "./routes"
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import _store from "common/store";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "navigation/AppNavigator";
import { navigationRef } from "navigation/RootNavigation";
import NeverUpdate from "components/NeverUpdate";
import useTheme from "common/providers/useTheme";
import ScreenContainer from 'components/ScreenContainer';
import LinkHandler from "components/LinkHandler";
import LanguageHandler from "common/LanguageHandler";
import "common/utils/_data";
import { LaunchArguments } from "react-native-launch-arguments";
const launchArgs = LaunchArguments.value();
if (launchArgs.namespace) {
  Constants.E2E = true;
  Constants.E2E_NAMESPACE = launchArgs.namespace;
}
const store = _store();

const linking = {
  prefixes: ["mobile://"],
};

type Props = {
  children: React.ReactNode;
};
const App: FunctionComponent<Props> = () => (
  <ScreenContainer withoutSafeAreaView={true}>
  </ScreenContainer>
);
export default App;

ReactNative.LogBox.ignoreLogs([/Require .*/, /Non-seri.*/, /AsyncStorage.*/, /Deprecation.*/]);
