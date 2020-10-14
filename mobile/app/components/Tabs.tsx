import React from "react";
import { TabBar, TabView } from "react-native-tab-view";

interface Props {
  tabBarRow?: boolean;
  navigationState?: any;
  tabBarStyle?: any;
  renderScene?: any;
  onIndexChange?: (index: number) => void;
  scrollEnabled?: boolean;
  lazy?: boolean;
  tabStyle?: {};
  indicatorStyle?: {};
  labelStyle?: {};
  renderLabel?: () => void;
}

export const Tabs: React.FC<Props> = ({
  tabBarRow,
  navigationState,
  tabBarStyle,
  renderScene,
  onIndexChange,
  scrollEnabled,
  lazy,
  tabStyle = {},
  indicatorStyle,
  labelStyle = {},
  renderLabel,
  ...props
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
  );

  return (
    <TabView
      // useNativeDriver
      lazy={lazy}
      navigationState={navigationState}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      timingConfig={{ duration: 100 }}
      onIndexChange={(index) => onIndexChange(index)}
      initialLayout={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    />
  );
};

const styles = ReactNative.StyleSheet.create({
  tabPrimary: {
    backgroundColor: "white",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: palette.CoolGray,
    elevation: 0,
  },
  tabSecondary: {
    backgroundColor: palette.defaultLight,
    borderBottomWidth: 1,
    borderColor: palette.CoolGray,
    elevation: 0,
  },
  TabText: {
    color: palette.text,
    fontWeight: "bold",
    fontSize: em(1),
  },

  indicatorPrimary: {
    backgroundColor: palette.primary,
  },

  TabTextLight: {
    fontSize: 11,
    color: palette.primaryDark,
  },
  bar: {
    backgroundColor: "white",
  },
  tab: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: palette.divider,
    borderRightColor: palette.dividerLight,
    elevation: 0,
  },
});
