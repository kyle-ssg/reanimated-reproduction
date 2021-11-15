import React, { useState } from 'react'
import withScreen, { IRouteParams } from './withScreen'
import { RouteUrls } from '../route-urls'
import ScreenContainer from 'components/ScreenContainer'
interface HomeScreen {
  modalVisible: boolean
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
}

const HomeScreen: React.FC<HomeScreen> = ({ push }) => {
  const [isVisible, setIsVisible] = useState(false)
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
