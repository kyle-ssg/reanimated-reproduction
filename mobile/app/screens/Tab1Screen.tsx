import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'
import Button from 'components/base/forms/Button'
import { FC } from 'react'

type Tab1Screen = Screen & {}

const Tab1Screen: FC<Tab1Screen> = ({ push }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Text>I am the Tab1Screen</Text>
      <Button onPress={() => push(RouteUrls.ModalScreen)}>Modal</Button>
    </ScreenContainer>
  )
}

export default withScreen(Tab1Screen)
