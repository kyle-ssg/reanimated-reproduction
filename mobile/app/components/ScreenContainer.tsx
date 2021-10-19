import React, { FunctionComponent } from 'react' // we need this to make JSX compile
import * as ReactNative from 'react-native'
import '../style/style_variables'
import Flex from 'components/base/grid/Flex'
import useInsets from 'components/base/useInset'

type ComponentType = ReactNative.ViewProps & { withoutSafeAreaView?: boolean }

const ScreenContainer: FunctionComponent<ComponentType> = ({
  children,
  withoutSafeAreaView,
  ...props
}) => {
  const insets = useInsets()
  // Note: if we use a transparent status bar we need to add StatusBar.currentHeight to padding top for android
  return !withoutSafeAreaView ? (
    <ReactNative.SafeAreaView
      {...props}
      style={[{ flex: 1 }, { paddingTop: insets.top }]}
    >
      {children}
    </ReactNative.SafeAreaView>
  ) : (
    <Flex {...props}>{children}</Flex>
  )
}

export default ScreenContainer
