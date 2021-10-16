import React from 'react'
import Animation from 'lottie-react-native'
import { StyleProp, ViewStyle } from 'react-native'

const json = { ...require('./loader.lottie.json') }

json.assets[0].layers[0].shapes[0].it[1].c.k = [0.82, 0.79, 0.8, 1]

interface LoaderProps {
  size?: number
  style?: StyleProp<ViewStyle>
}

export const Loader: React.FC<LoaderProps> = ({ size = 2.25, style }) => (
  <View style={{ opacity: 0.75 }}>
    <Animation
      autoPlay
      style={[
        {
          width: 40 * size,
          height: 30 * size,
        },
        style,
      ]}
      loop
      source={json}
    />
  </View>
)

export default Loader
