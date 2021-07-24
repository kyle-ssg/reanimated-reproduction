import React from 'react'
import { Component } from 'react'
import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'

type Tab1Screen = Screen & {}

const Tab1Screen: React.FC<Tab1Screen> = ({ children }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Text>I am the Tab1Screen</Text>
    </ScreenContainer>
  )
}

export default withScreen(Tab1Screen)
