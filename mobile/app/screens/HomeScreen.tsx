import { FC } from 'react'
import withScreen, { IRouteParams } from './withScreen'
import ScreenContainer from 'components/ScreenContainer'
import Button from 'components/base/forms/Button'
import Styles from '../style/_style_screen'
import { RouteUrls } from '../route-urls'
interface HomeScreen {
  modalVisible: boolean
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
}

const HomeScreen: FC<HomeScreen> = ({ push }) => {
  // const goGeneric = () => push(RouteUrls.mainApp, {})
  const click = () => {
    push(RouteUrls.mainApp)
  }
  return (
    <ScreenContainer style={Styles.body}>
      <Button onPress={click}>Push</Button>
    </ScreenContainer>
  )
}

export default withScreen(HomeScreen)
