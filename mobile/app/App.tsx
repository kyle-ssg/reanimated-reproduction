import React, { Component, FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import _store from 'common/store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'navigation/AppNavigator';
import { navigationRef } from 'navigation/RootNavigation';
import NeverUpdate from 'components/NeverUpdate';
import withTheme, { IWithTheme, useTheme } from 'common/providers/withTheme';

const store = _store();

const linking = {
  prefixes: ['mobile://'],
};


type ComponentType = {
  children: React.ReactNode
}


const AppContainer: FunctionComponent<ComponentType> = ({ children,  }) => {
  const theme = useTheme();
  return (
      <Flex style={[Styles.body, theme?.backgroundColour && { backgroundColor:theme.backgroundColour }]}>
          {children}
      </Flex>
  );
};



class App extends Component<ComponentType> {
  static displayName = 'TheComponent';

  render() {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="transparent" translucent/>
            <AppContainer>
                <NeverUpdate>
                    <NavigationContainer linking={linking} ref={navigationRef}>
                        <AppNavigator />
                    </NavigationContainer>
                </NeverUpdate>
            </AppContainer>
        </Provider>
    );
  }
}

export default App;
