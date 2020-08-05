// import propTypes from 'prop-types';
import React, { PureComponent } from "react";
import propTypes from "prop-types";
import { TabBar, TabView } from "react-native-tab-view";

export default class Tabs extends PureComponent {
  static displayName = "Tabs";

  static propTypes = {
    tabBarRow: propTypes.bool,
    navigationState: propTypes.object,
    tabBarStyle: propTypes.any,
    renderScene: propTypes.func,
    onIndexChange: propTypes.func,
    scrollEnabled: propTypes.bool,
    lazy: propTypes.bool,
    tabStyle: propTypes.object,
    indicatorStyle: propTypes.object,
    labelStyle: propTypes.object,
    renderLabel: propTypes.func,
  };

  static defaultProps = {
    tabStyle: {},
    labelStyle: {},
  };

  renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled={this.props.scrollEnabled}
      labelStyle={[styles.TabText, this.props.labelStyle]}
      getLabelText={({ route: { title } }) => title}
      style={{ ...styles.tabPrimary, ...this.props.tabBarStyle }}
      tabStyle={
        this.props.tabBarRow
          ? { ...Styles.row, ...this.props.tabStyle }
          : this.props.tabStyle
      }
      indicatorStyle={{
        ...styles.indicatorPrimary,
        ...this.props.indicatorStyle,
      }}
      renderIcon={({ route }) => route.icon || null}
      renderLabel={this.props.renderLabel}
    />
  );

  render() {
    return (
      <TabView
        useNativeDriver
        lazy={this.props.lazy}
        navigationState={this.props.navigationState}
        renderTabBar={this.renderTabBar}
        renderScene={this.props.renderScene}
        timingConfig={{ duration: 100 }}
        onIndexChange={(index) => this.props.onIndexChange(index)}
        initialLayout={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      />
    );
  }
}

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
