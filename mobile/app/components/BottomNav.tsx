import React, { useCallback, useEffect, useState } from 'react';

import Home from '../svg-icons/Home';
import Nutrition from '../svg-icons/Nutrition';
import Health from '../svg-icons/Health';
import Resources from '../svg-icons/Resources';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultBottomDrawerNavigationOptions } from '../style/style_navs';
import BottomDrawer from 'components/BottomDrawer';
import WithSetValue from 'common/providers/WithSetValue';
import LazyTabs from '../LazyTabs';
import SegmentedControl from 'components/SegmentedControl';
const Stack = createStackNavigator();
import useTheme from 'common/providers/useTheme';



const BottomNav = ({ state, descriptors, navigation }) => {
  const theme = useTheme()

  const tint = theme?.primary;
  const activeFill = tint || palette.primary;

  const onPress = (index) => {
    const route = state.routes[index];

    const isFocused = state.index === index;

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
      <>
          <View>
              <Row style={styles.tabContainer}>
                  <Flex>
                      <Row style={Styles.mr20}>
                          <TouchableOpacity activeOpacity={1} style={[styles.tab, state.index === 0 && styles.activeTab]}
                            onPress={() => onPress(0)}
                          >
                              <Text>Home</Text>
                          </TouchableOpacity>
                      </Row>
                  </Flex>
              </Row>
          </View>
      </>
  );
};

const tabBarHeight = 64 + global.styleVariables.insets.bottom;

const styles = {
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - tabBarHeight,
  },
  activeTabText: {
    fontWeight: styleVariables.boldFontWeight,
  },
  activeTab: {},
  tab: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: styleVariables.paddingBase,
    paddingRight: styleVariables.paddingBase,
    flex: 1,
  },
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: palette.bottomNavBackground,
    alignItems: 'center',
    justifyContent: 'center',
    height: tabBarHeight,
    paddingBottom: styleVariables.insets.bottom,
    borderTopLeftRadius: styleVariables.largeRadius,
    borderTopRightRadius: styleVariables.largeRadius,
    shadowColor: '#201C26',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // elevation: 10,
  },
};

export default BottomNav;
