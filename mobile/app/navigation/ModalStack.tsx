import React, { FunctionComponent } from 'react'
import defaultNavigationOptions from '../style/navigation_styles'
import { routes } from '../routes'
import { RouteUrls } from '../route-urls'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

export default function (TheScreen: any, url: RouteUrls, hideHeader, children) {
  const Stack = createNativeStackNavigator()
  const Navigator = Stack.Navigator

  const StackScreen: FunctionComponent = () => {
    return (
      <Navigator
        independent
        screenOptions={defaultNavigationOptions}
        initialRouteName={Constants.simulate.FORCE_SUB_PAGE || '/'}
      >
        <>
          <Stack.Screen
            name={'/'}
            options={{ ...routes[url].options, headerShown: !hideHeader }}
            component={TheScreen}
          />
          {children && children(Stack)}
        </>
      </Navigator>
    )
  }

  return StackScreen
}
