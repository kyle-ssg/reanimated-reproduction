import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { Animated, Easing, Pressable } from 'react-native'
import Animation from 'lottie-react-native'

const json = require('./checkbox.json')

interface Checkbox {
  value?: number
  onPress: () => null
}

const Checkbox: React.FC<Checkbox> = ({ value, onPress }) => {
  const [animatedValue, setAnimatedValue] = useState(null)

  useEffect(() => {
    setAnimatedValue(new Animated.Value(value ? 0.5 : 0))

    Animated.timing(animatedValue, {
      useNativeDriver: true,
      toValue: value ? 0.5 : 0,
      duration: 700,
      easing: value ? Easing.linear : Easing.out(Easing.cubic),
    }).start()
  }, [value, animatedValue])

  return (
    <Pressable onPress={onPress}>
      <Animation
        progress={animatedValue}
        style={styles.checkbox}
        source={json}
      />
    </Pressable>
  )
}

Checkbox.propTypes = {}
const styles = ReactNative.StyleSheet.create({
  checkbox: { width: 54, height: 54 },
})

export default Checkbox
