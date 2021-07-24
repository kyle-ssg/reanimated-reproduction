import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const BottomNav = ({ state, descriptors, navigation }) => {
  const onPress = (index) => {
    const route = state.routes[index]
    const isFocused = state.index === index
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  return (
    <View style={styles.container}>
      <Row>
        <Flex>
          <Row>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.tab, state.index === 0 && styles.activeTab]}
              onPress={() => onPress(0)}
            >
              <Text
                style={[
                  styles.textInactive,
                  state.index === 0 && styles.textActive,
                ]}
              >
                Tab 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.tab, state.index === 1 && styles.activeTab]}
              onPress={() => onPress(1)}
            >
              <Text
                style={[
                  styles.textInactive,
                  state.index === 1 && styles.textActive,
                ]}
              >
                Tab 2
              </Text>
            </TouchableOpacity>
          </Row>
        </Flex>
      </Row>
    </View>
  )
}

const tabBarHeight = 40 + styleVariables.insets.bottom
const styles = StyleSheet.create({
  textInactive: {
    width: 50,
    color: 'rgba(88,115,225,0.5)',
  },
  textActive: {
    width: 50,
    color: palette.primary,
  },
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - tabBarHeight,
  },
  activeTabText: {},
  activeTab: {},
  tab: {
    height: 55,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: styleVariables.paddingBase,
    paddingRight: styleVariables.paddingBase,
    flex: 1,
  },
  lastTab: {
    paddingRight: 0,
  },
  container: {
    borderTopWidth: 1,
    borderColor: '#aaa',
    backgroundColor: '#eaeaea',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabContainer: {
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: tabBarHeight,
    shadowColor: '#201C26',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
})

export default BottomNav
