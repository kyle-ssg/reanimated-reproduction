import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'
import ModalStack from 'navigation/ModalStack'
import { routes } from '../routes'
import Button from 'components/base/forms/Button'
import { FC } from 'react'

type ModalScreen = Screen & {}

const ModalScreen: FC<ModalScreen> = ({ push, pop }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Button
        onPress={() => {
          pop()
        }}
      >
        Close
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

export default ModalStack(
  withScreen(ModalScreen),
  RouteUrls.ModalScreen,
  true,
  (Stack) => (
    <>
      <Stack.Screen
        name={RouteUrls.ModalScreen2}
        options={routes[RouteUrls.ModalScreen2].options}
        component={routes[RouteUrls.ModalScreen2].component}
      />
    </>
  ),
)
