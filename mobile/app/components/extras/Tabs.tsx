import React from 'react'
import { TabBar, TabView } from 'react-native-tab-view'

interface Props {
  tabBarRow?: boolean
  navigationState?: {}
  tabBarStyle?: any
  renderScene?: () => void
  onIndexChange?: () => void
  scrollEnabled?: boolean
  lazy?: boolean
  tabStyle?: {}
  indicatorStyle?: {}
  labelStyle?: {}
  renderLabel?: () => void
}

export const Tabs = ({
  tabBarRow,
  navigationState,
  tabBarStyle,
  renderScene,
  onIndexChange,
  scrollEnabled,
  tabStyle = {},
  labelStyle = {},
  indicatorStyle,
  lazy,
  renderLabel,
}) => {
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled={scrollEnabled}
      labelStyle={[styles.TabText, labelStyle]}
      getLabelText={({ route: { title } }) => title}
      style={{ ...styles.tabPrimary, ...tabBarStyle }}
      tabStyle={tabBarRow ? { ...Styles.row, ...tabStyle } : tabStyle}
      indicatorStyle={{
        ...styles.indicatorPrimary,
        ...indicatorStyle,
      }}
      renderIcon={({ route }) => route.icon || null}
      renderLabel={renderLabel}
    />
  )

  return (
    <TabView
      useNativeDriver
      lazy={lazy}
      navigationState={navigationState}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      timingConfig={{ duration: 100 }}
      onIndexChange={(index) => onIndexChange(index)}
      initialLayout={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
    />
  )
}

const styles = ReactNative.StyleSheet.create({
  tabPrimary: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: palette.primary,
    elevation: 0,
  },
  tabSecondary: {
    borderBottomWidth: 1,
    borderColor: palette.secondary,
    elevation: 0,
  },
  TabText: {
    color: palette.text,
    fontSize: em(1),
  },

  indicatorPrimary: {
    backgroundColor: palette.primary,
  },

  TabTextLight: {
    fontSize: 11,
    color: palette.secondary,
  },
  bar: {
    backgroundColor: 'white',
  },
  tab: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: palette.secondary,
    borderRightColor: palette.secondary,
    elevation: 0,
  },
})
