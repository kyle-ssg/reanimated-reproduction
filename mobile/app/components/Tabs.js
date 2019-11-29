// import propTypes from 'prop-types';
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { PagerPan, TabBar, TabView } from 'react-native-tab-view';

export default class Tabs extends PureComponent {
  static displayName = 'Tabs';

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
  }

  static _renderPager = (props) => (
      <PagerPan
        {...props}
        swipeEnabled={false}
      />
  );

  renderTabBar = (props) => (
      <TabBar
        {...props}
        scrollEnabled={this.props.scrollEnabled}
        labelStyle={[styles.TabText, this.props.labelStyle]}
        getLabelText={({ route: { title } }) => title}
        style={{ ...styles.tabPrimary, ...this.props.tabBarStyle }}
        tabStyle={this.props.tabBarRow ? { ...Styles.row, ...this.props.tabStyle } : this.props.tabStyle}
        indicatorStyle={{ ...styles.indicatorPrimary, ...this.props.indicatorStyle }}
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
            renderPager={Tabs._renderPager}
            renderScene={this.props.renderScene}
            timingConfig={{ duration: 100 }}
            onIndexChange={(index) => this.props.onIndexChange(index)}
            initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
          />
      );
  }
}

const styles = StyleSheet.create({
    tabPrimary: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: pallette.CoolGray,
        elevation: 0,
    },
    tabSecondary: {
        backgroundColor: pallette.defaultLight,
        borderBottomWidth: 1,
        borderColor: pallette.CoolGray,
        elevation: 0,
    },
    TabText: {
        color: pallette.text,
        fontWeight: 'bold',
        fontSize: em(1),
    },

    indicatorPrimary: {
        backgroundColor: pallette.primary,
    },

    TabTextLight: {
        fontSize: 11,
        fontFamily: 'F37Ginger-Regular',
        color: pallette.primaryDark,
    },
    bar: {
        backgroundColor: 'white',
    },
    tab: {
        borderRightWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: pallette.divider,
        borderRightColor: pallette.dividerLight,
        elevation: 0,
    },
});
