import React, { Component, FunctionComponent } from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

//This component, for iOS, lets you draw a custom view where the navbar is, use with a backgroundColor:"transparent"
// This will be cross platform when the following is merged https://github.com/software-mansion/react-native-screens/pull/575

type ComponentType = {
  style?:ReactNative.ViewStyle
  navbarStyle?:ReactNative.ViewStyle
}


const NavBackgroundHelper: FunctionComponent<ComponentType> = ({}) => {
    return (
        <Flex>
            <View style={[styles.navbar, this.props.navbarStyle]}/>
            {this.props.children}
        </Flex>
    );
};

const styles = StyleSheet.create({
    navbar: { minHeight:initialWindowMetrics.insets.top+44 }
})

export default NavBackgroundHelper;
