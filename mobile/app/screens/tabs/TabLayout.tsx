import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import defaultNavigationOptions from '../../style/style_navs';
import { routes } from '../../routes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { TouchableOpacity } from 'react-native';

type ComponentType = {
}

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const TAB_HEIGHT = 64;


class TabLayout extends Component<ComponentType> {
  state = {
      activeIndex:0
  }
  goTab = (index)=> {
      const scrollView:ReactNative.ScrollView = this.scrollView;
      scrollView.scrollTo({ x:ReactNative.Dimensions.get("window").width*(index-1), animated:true })
      this.setState({ activeIndex:index-1 })
  }

  goTab1 = ()=> {
      this.goTab(1)
  }
  goTab2 = ()=> {
      this.goTab(2)
  }

  onRef = (scrollView)=> this.scrollView = scrollView;
  render() {
      const { state:{ activeIndex } } = this;
      return (
          <>
              <ScrollView scrollEnabled={false} ref={this.onRef} bounces={false}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}>
                  <View style={styles.screen}>
                      <NavigationContainer independent>
                          <Navigator screenOptions={defaultNavigationOptions} initialRouteName={routes.tab.name}>
                              <Stack.Screen
                                name={routes.tab.name}
                                options={routes.tab.options}
                                component={routes.tab.component}
                              />
                          </Navigator>
                      </NavigationContainer>
                  </View>
                  <View style={styles.screen}>
                      <NavigationContainer independent>
                          <Navigator screenOptions={defaultNavigationOptions} initialRouteName={routes.tab.name}>
                              <Stack.Screen
                                name={routes.tab.name}
                                options={{ ...routes.tab.options, title:"Tab 2" }}
                                component={routes.tab.component}
                      />
                          </Navigator>
                      </NavigationContainer>
                  </View>
              </ScrollView>
              <Row style={styles.tabContainer}>
                  <TouchableOpacity activeOpacity={1} style={[styles.tab, activeIndex === 0 && styles.activeTab]} onPress={this.goTab1}>
                      <Text style={activeIndex === 0 && styles.activeTabText}>
                          Tab 1
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} style={[styles.tab, activeIndex === 1 && styles.activeTab]} onPress={this.goTab2}>
                      <Text style={activeIndex === 1 && styles.activeTabText}>
                          Tab 2
                      </Text>
                  </TouchableOpacity>
              </Row>
          </>
      )
  }
}

const styles = {
    screen : {
        width: ReactNative.Dimensions.get("window").width,
        height: ReactNative.Dimensions.get("window").height-TAB_HEIGHT
    },
    tab: {
        height:TAB_HEIGHT,
        alignItems:'center',
        paddingLeft: styleVariables.paddingBase,
        paddingRight: styleVariables.paddingBase,
        justifyContent: "center"
    },
    activeTabText: {
        fontWeight:styleVariables.boldFontWeight
    },
    tabContainer: {
        height: TAB_HEIGHT,
        lineHeight: TAB_HEIGHT,
        backgroundColor:"#f1f1f1",
        alignItems:'center',
        justifyContent:'center'
    }
}

export default TabLayout;
