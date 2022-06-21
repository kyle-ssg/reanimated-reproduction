import { FC } from 'react'
import withScreen, { IRouteParams, Screen } from './withScreen'
import ScreenContainer from 'components/ScreenContainer'
import Button from 'components/base/forms/Button'
import Styles from '../style/_style_screen'
import { RouteUrls } from '../route-urls'

type HomeScreen = Screen & {
  modalVisible: boolean
  modal?: boolean
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
}

const HomeScreen: FC<HomeScreen> = ({
  push,
  modal,
  dismissModal,
  canGoBack,
  pop,
}) => {
  // const goGeneric = () => push(RouteUrls.mainApp, {})
  const click = () => {
    push(RouteUrls.mainApp)
  }
  const clickModal = () => {
    push('ModalScreen2')
  }
  return (
    <ScreenContainer style={Styles.body}>
      {modal ? (
        <>
          <Row space>
            {canGoBack && <Button onPress={pop}>Back</Button>}
            <Button onPress={dismissModal}>Close</Button>
          </Row>
          <Button onPress={clickModal}>Push</Button>
        </>
      ) : (
        <Button onPress={click}>Push</Button>
      )}
    </ScreenContainer>
  )
}

export default withScreen(HomeScreen)
