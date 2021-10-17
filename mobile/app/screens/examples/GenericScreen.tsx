import React, { Component } from 'react'
import withScreen, { Screen } from '../withScreen'

export type GenericScreenType = {
  text: string
  style: ReactNative.ViewStyle
}
type ComponentType = Screen & GenericScreenType

class GenericScreen extends Component<ComponentType> {
  state = {}
  render() {
    return (
      this.props.children || (
        <Flex>
          <Text>I am a generic screen</Text>
        </Flex>
      )
    )
  }
}

export default withScreen(GenericScreen)
