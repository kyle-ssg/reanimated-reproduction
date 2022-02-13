import React, { FunctionComponent, ReactNode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { LogBox, StatusBar } from 'react-native'
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
import { Constants } from 'common/utils'
import CodepushUpdater from 'components/utility-components/CodePushUpdater'

const launchArgs = LaunchArguments.value()
if (launchArgs.namespace) {
  // @ts-ignore
  Constants.E2E = true
  Constants.E2E_NAMESPACE = launchArgs.namespace
}
const store = _store()

const linking = {
  prefixes: ['mobile://'],
}

type Props = {
  children: ReactNode
}
const App: FunctionComponent<Props> = () => (
  <SafeAreaProvider>
    <StatusBar
      barStyle='dark-content'
      backgroundColor='transparent'
      translucent
    />
    <ScreenContainer withoutSafeAreaView={true}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={store.__PERSISTOR}>
          <NeverUpdate>
            {/*// @ts-ignore*/}
            <BreakpointProvider>
              <LanguageHandler>
                <NavigationContainer linking={linking} ref={navigationRef}>
                  <AppNavigator />
                </NavigationContainer>
                <CodepushUpdater />
              </LanguageHandler>
            </BreakpointProvider>
          </NeverUpdate>
        </PersistGate>
      </Provider>
    </ScreenContainer>
  </SafeAreaProvider>
)
export default App

LogBox.ignoreLogs([
  /Require .*/,
  /Non-seri.*/,
  /AsyncStorage.*/,
  /Deprecation.*/,
])
