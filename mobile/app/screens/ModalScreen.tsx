import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'
import ModalStack from 'navigation/ModalStack'
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
        name={RouteUrls.ModalScreen}
        options={routes[RouteUrls.ModalScreen].options}
        component={routes[RouteUrls.ModalScreen].component}
      />
    </>
  ),
)
