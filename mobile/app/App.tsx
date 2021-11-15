import React, { FunctionComponent } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import _store from 'common/store'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from 'navigation/AppNavigator'
import { navigationRef } from 'navigation/RootNavigation'
import NeverUpdate from 'components/NeverUpdate'
import ScreenContainer from 'components/ScreenContainer'
import LanguageHandler from 'common/LanguageHandler'
import 'common/utils/_data'
import { LaunchArguments } from 'react-native-launch-arguments'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BreakpointProvider from 'components/base/BreakpointProvider'

const launchArgs = LaunchArguments.value()
if (launchArgs.namespace) {
  Constants.E2E = true
  Constants.E2E_NAMESPACE = launchArgs.namespace
}
const store = _store()

const linking = {
  prefixes: ['mobile://'],
}

type Props = {
  children: React.ReactNode
}
const App: FunctionComponent<Props> = () => (
  <SafeAreaProvider>
    <ScreenContainer withoutSafeAreaView={true}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={store.__PERSISTOR}>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <NeverUpdate>
            {/*// @ts-ignore*/}
            <BreakpointProvider>
              <LanguageHandler>
                <NavigationContainer linking={linking} ref={navigationRef}>
                  <AppNavigator />
                </NavigationContainer>
              </LanguageHandler>
            </BreakpointProvider>
          </NeverUpdate>
        </PersistGate>
      </Provider>
    </ScreenContainer>
  </SafeAreaProvider>
)
export default App

ReactNative.LogBox.ignoreLogs([
  /Require .*/,
  /Non-seri.*/,
  /AsyncStorage.*/,
  /Deprecation.*/,
])
