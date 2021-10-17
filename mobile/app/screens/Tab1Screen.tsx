import React from 'react'
import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'

type Tab1Screen = Screen & {}

const Tab1Screen: React.FC<Tab1Screen> = ({ children, push }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Text>I am the Tab1Screen</Text>
      <Button onPress={() => push(RouteUrls.ModalScreen)}>Modal</Button>
    </ScreenContainer>
  )
}

export default withScreen(Tab1Screen)
