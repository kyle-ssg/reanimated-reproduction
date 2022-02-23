import Flex from './base/grid/Flex'
import Row from './base/grid/Row'
import { TouchableOpacity, View } from 'react-native'
import Text from 'components/base/type/Text'
import { palette, styleVariables } from '../style/style_variables'
import { FC } from 'react'

type TabItemType = {
  isActive: boolean
  index: number
  onPress: (index: number) => void
}

const TabItem: FC<TabItemType> = ({ children, isActive, index, onPress }) => {
  const handlePress = () => {
    onPress(index)
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={isActive ? [styles.tab, styles.activeTab] : styles.tab}
      onPress={handlePress}
    >
      <Text style={isActive ? styles.textActive : styles.textInactive}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const BottomNav = ({ state, navigation }) => {
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
            <TabItem onPress={onPress} index={0} isActive={state.index === 0}>
              Tab 1
            </TabItem>
            <TabItem onPress={onPress} index={1} isActive={state.index === 1}>
              Tab 2
            </TabItem>
          </Row>
        </Flex>
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  textInactive: {
    width: 50,
    color: 'rgba(88,115,225,0.5)',
  },
  textActive: {
    width: 50,
    color: palette.primary,
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
})

export default BottomNav
