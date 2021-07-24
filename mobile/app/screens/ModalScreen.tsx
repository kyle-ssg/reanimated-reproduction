import React from 'react'
import { Component } from 'react'
import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'
import { useNavigation } from '@react-navigation/native'
import { goBack } from '../../e2e/testHelpers'
import ModalStack from 'navigation/ModalStack'
import { routes } from '../routes'

type ModalScreen = Screen & {}

const ModalScreen: React.FC<ModalScreen> = ({ children, push, pop }) => {
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
