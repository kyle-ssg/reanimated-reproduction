import { FC, useState } from 'react'
import withScreen, { IRouteParams } from './withScreen'
import ScreenContainer from 'components/ScreenContainer'
import Button from 'components/base/forms/Button'
import Fade from 'components/base/animation/Fade'
import Styles from '../style/_style_screen'
import { RouteUrls } from '../route-urls'
interface HomeScreen {
  modalVisible: boolean
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
}

const HomeScreen: FC<HomeScreen> = ({ push }) => {
  const [count, setCount] = useState<number>(0)
  // const goGeneric = () => push(RouteUrls.mainApp, {})
  const click = () => {
    push(RouteUrls.mainApp)
  }
  return (
    <ScreenContainer style={[Styles.body]}>
      <Fade>
        <Text>{count}</Text>
      </Fade>
      <Button onPress={click}>re-render</Button>
    </ScreenContainer>
  )
}

export default withScreen(HomeScreen)
