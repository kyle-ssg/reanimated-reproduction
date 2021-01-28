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

const store = _store();

const linking = {
  prefixes: ["mobile://"],
};

type Props = {
  children: React.ReactNode;
};
const App: FunctionComponent<Props> = () => (
  <ScreenContainer withoutSafeAreaView={true}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={store.__PERSISTOR}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <NeverUpdate>
          {/*// @ts-ignore*/}
          <NavigationContainer linking={linking} ref={navigationRef}>
            <AppNavigator />
          </NavigationContainer>
        </NeverUpdate>
      </PersistGate>
    </Provider>
  </ScreenContainer>
);

export default App;
