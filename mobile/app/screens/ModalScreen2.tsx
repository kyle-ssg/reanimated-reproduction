import React from 'react'
import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'

type ModalScreen2 = Screen & {}

const ModalScreen2: React.FC<ModalScreen2> = ({ children, push, pop }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Button
        onPress={() => {
          pop()
        }}
      >
        Back
      </Button>
      <Button
        onPress={() => {
          push(RouteUrls.ModalScreen2)
        }}
      >
        Nested Modal Screen
      </Button>
    </ScreenContainer>
  )
}

export default withScreen(ModalScreen2)
