import React, {FunctionComponent} from 'react'
import {LogBox} from 'react-native'
import Animated from 'react-native-reanimated'

const App: FunctionComponent = () => <Animated.View />
export default App

LogBox.ignoreLogs([
  /Require .*/,
  /Non-seri.*/,
  /AsyncStorage.*/,
  /Deprecation.*/,
])
