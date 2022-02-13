import 'app/style/_style_screen'
import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
