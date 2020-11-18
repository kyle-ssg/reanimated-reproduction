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

const { store, persistor } = _store();

const linking = {
  prefixes: ["mobile://"],
};

type Props = {
  children: React.ReactNode;
};

const AppContainer: FunctionComponent<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <Flex
      style={[
        Styles.body,
        theme?.backgroundColour && { backgroundColor: theme.backgroundColour },
      ]}
    >
      {children}
    </Flex>
  );
};

const App: FunctionComponent<Props> = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar backgroundColor="transparent" translucent />
      <AppContainer>
        <NeverUpdate>
          <NavigationContainer linking={linking} ref={navigationRef}>
            <AppNavigator />
          </NavigationContainer>
        </NeverUpdate>
      </AppContainer>
    </PersistGate>
  </Provider>
);

export default App;
