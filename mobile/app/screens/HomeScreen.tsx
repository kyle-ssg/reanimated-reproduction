import React, { useState } from 'react'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'
import { IRouteParams } from './withScreen'
import ScreenContainer from "components/ScreenContainer";

interface HomeScreen {
  modalVisible: boolean
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
}

const HomeScreen: React.FC<HomeScreen> = ({ push }) => {
  const [isVisible, setIsVisible] = useState(false)

  const goGeneric = () => push(RouteUrls.mainApp, {})

  return (
    <ScreenContainer style={[Styles.body]}>
      <Button onPress={goGeneric}>Go to a generic page</Button>
    </ScreenContainer>
  )
}

export default withScreen(HomeScreen)
