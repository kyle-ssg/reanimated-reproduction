import { FC } from 'react'
import withScreen, { IRouteParams } from './withScreen'
import { RouteUrls } from '../route-urls'
import ScreenContainer from 'components/ScreenContainer'
import Button from 'components/base/forms/Button'
import Fade from 'components/base/animation/Fade'
import Styles from '../style/_style_screen'

interface HomeScreen {
  modalVisible: boolean
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
}

const HomeScreen: FC<HomeScreen> = ({ push }) => {
  const goGeneric = () => push(RouteUrls.mainApp, {})
  return (
    <ScreenContainer style={[Styles.body]}>
      <Fade>
        <Text>Hi</Text>
      </Fade>
      <Button onPress={goGeneric}>Go to a generic page</Button>
    </ScreenContainer>
  )
}

export default withScreen(HomeScreen)
