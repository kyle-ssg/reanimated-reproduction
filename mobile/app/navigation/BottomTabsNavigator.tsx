import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import defaultNavigationOptions from '../style/navigation_styles'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { RouteUrls } from '../route-urls'
import BottomNav from 'components/BottomNav'
import { routes } from '../routes'
import useInsets from 'components/base/useInset'

type ComponentType = {}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Navigator = Stack.Navigator

const Stack1 = () => (
  <Navigator
    screenOptions={defaultNavigationOptions}
    initialRouteName={RouteUrls.Tab1Screen}
  >
    <Stack.Screen
      name={RouteUrls.Tab1Screen}
      options={routes[RouteUrls.Tab1Screen].options}
      component={routes[RouteUrls.Tab1Screen].component}
      initialParams={routes[RouteUrls.Tab1Screen].params}
    />
  </Navigator>
)

const Stack2 = () => (
  <Navigator
    screenOptions={defaultNavigationOptions}
    initialRouteName={RouteUrls.Tab2Screen}
  >
    <Stack.Screen
      name={RouteUrls.Tab2Screen}
      options={routes[RouteUrls.Tab2Screen].options}
      component={routes[RouteUrls.Tab2Screen].component}
      initialParams={routes[RouteUrls.Tab2Screen].params}
    />
  </Navigator>
)

const MainAppNavigator = ({ route }) => {
  const insets = useInsets()

  return (
    <Flex
      style={[
        Styles.body,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Tab.Navigator
        lazy={false}
        initialRouteName={RouteUrls.HomeScreen}
        tabBar={(props) => <BottomNav {...props} />}
      >
        <Tab.Screen name={RouteUrls.Tab1Screen} component={Stack1} />
        <Tab.Screen name={RouteUrls.Tab2Screen} component={Stack2} />
      </Tab.Navigator>
    </Flex>
  )
}
const styles = ReactNative.StyleSheet.create({})

export default MainAppNavigator
