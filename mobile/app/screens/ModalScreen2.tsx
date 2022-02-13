import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'
import Button from 'components/base/forms/Button'
import { FC } from 'react'

type ModalScreen2 = Screen & {}

const ModalScreen2: FC<ModalScreen2> = ({ push, pop }) => {
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
