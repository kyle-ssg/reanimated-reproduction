import { StyleSheet, Text, View, Button } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export type ModalType = {
  animatedValue?: Animated.SharedValue<number>
  visible: boolean
  preventDismiss?: boolean
  height: number
  onDismissPress?: () => void
}

import React, { FunctionComponent } from 'react' // we need this to make JSX compile

type ComponentType = {
  children: React.ReactNode
  height: number
  onDismissPress: () => void
  visible?: boolean
}

const TheComponent: FunctionComponent<ComponentType> = ({
  children,
  height,
  visible,
  onDismissPress,
}) => {
  const sheetRef = useRef(null)
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  useEffect(() => {
    if (visible) {
      sheetRef.current?.present()
    } else {
      sheetRef.current?.dismiss()
    }
  }, [visible])
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      onDismissPress()
    }
  }, [])
  const animatedIndex = useSharedValue(0)

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    // @ts-ignore
    opacity: interpolate(animatedIndex.value, [0, 1], [0, 1]),
  }))
  return (
    <BottomSheetModal
      backgroundStyle={styles.drawer}
      handleStyle={styles.drawerIndicator}
      index={1}
      backdropComponent={() => (
        <Animated.View
          autostart
          value={1}
          style={[containerAnimatedStyle, styles.modalStyle]}
        >
          <TouchableOpacity
            onPress={() => sheetRef.current?.dismiss()}
            style={StyleSheet.absoluteFill}
          ></TouchableOpacity>
        </Animated.View>
      )}
      ref={sheetRef}
      contentHeight={500}
      animatedIndex={animatedIndex}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      {children}
    </BottomSheetModal>
  )
}
const styles = ReactNative.StyleSheet.create({
  drawerIndicator: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
})
export default TheComponent
