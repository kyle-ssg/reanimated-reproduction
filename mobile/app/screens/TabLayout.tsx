import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import defaultNavigationOptions from '../style/style_navs';
import { routes } from '../routes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { RouteUrls } from '../route-urls';

type ComponentType = {}

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;


class TabLayout extends Component<ComponentType> {
  state = {
      activeIndex: 0,
  };
  scrollView = null;

  goTab = (index) => {
      const scrollView: ReactNative.ScrollView = this.scrollView;
      scrollView.scrollTo({ x: Dimensions.get('window').width * (index - 1), animated: false });
      this.setState({ activeIndex: index - 1 });
  };

  goTab1 = () => {
      this.goTab(1);
  };

  goTab2 = () => {
      this.goTab(2);
  };

  onRef = (scrollView: ReactNative.ScrollView) => {
      this.scrollView = scrollView;
  };

  render() {
      const { state: { activeIndex } } = this;
      return (
          <View style={ReactNative.StyleSheet.absoluteFillObject}>
              <ScrollView scrollEnabled={false} ref={this.onRef}
                bounces={false}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
        >
                  <View style={styles.screen}>
                      <NavigationContainer independent>
                          <Navigator screenOptions={defaultNavigationOptions} initialRouteName={RouteUrls.home}>
                              <Stack.Screen
                                name={RouteUrls.home}
                                options={routes[RouteUrls.home].options}
                                component={routes[RouteUrls.home].component}
                              />
                              <Stack.Screen
                                name={RouteUrls.generic}
                                options={routes[RouteUrls.generic].options}
                                component={routes[RouteUrls.generic].component}
                              />
                          </Navigator>
                      </NavigationContainer>
                  </View>
                  <View style={styles.screen}>
                      <NavigationContainer independent>
                          <Navigator screenOptions={defaultNavigationOptions} initialRouteName={RouteUrls.home}>
                              <Stack.Screen
                                name={RouteUrls.home}
                                options={routes[RouteUrls.home].options}
                                component={routes[RouteUrls.home].component}
                              />
                              <Stack.Screen
                                name={RouteUrls.generic}
                                options={routes[RouteUrls.generic].options}
                                component={routes[RouteUrls.generic].component}
                              />
                          </Navigator>
                      </NavigationContainer>
                  </View>
              </ScrollView>
              <Row style={styles.tabContainer}>
                  <TouchableOpacity activeOpacity={1} style={[styles.tab, activeIndex === 0 && styles.activeTab]}
                    onPress={this.goTab1}>
                      <Text style={activeIndex === 0 && styles.activeTabText}>
                          Tab 1
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} style={[styles.tab, activeIndex === 1 && styles.activeTab]}
                    onPress={this.goTab2}>
                      <Text style={activeIndex === 1 && styles.activeTabText}>
                          Tab 2
                      </Text>
                  </TouchableOpacity>
              </Row>
          </View>
      );
  }
}

const tabBarHeight = 64 + styleVariables.insets.bottom;
const styles = ReactNative.StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - tabBarHeight,
    },
    activeTabText: {
        fontWeight: styleVariables.boldFontWeight,
    },
    activeTab: {

    },
    tab: {
        height:64,
        justifyContent: 'center',
        paddingLeft: styleVariables.paddingBase,
        paddingRight: styleVariables.paddingBase,
    },
    tabContainer: {
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        height:tabBarHeight,
        paddingBottom: styleVariables.insets.bottom,
    },
});

export default TabLayout;
