import React, { Component } from 'react';
import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';

//This component, for iOS, lets you draw a custom view where the navbar is, use with a backgroundColor:"transparent"
type ComponentType = {
  style?:ReactNative.ViewStyle
  navbarStyle?:ReactNative.ViewStyle
}

class NavBackgroundHelper extends Component<ComponentType> {
  state = {};

  renderComponent = (insets) => {
      const navbarHeight = insets.top;
      return (
          <Flex>
              <View style={[{ minHeight:navbarHeight }, this.props.navbarStyle]}/>
              {this.props.children}
          </Flex>
      )
  }

  render() {
      return (
          <Row style={[styles.navbar, this.props.style]}>

          </Row>
      )
  }
}

const styles = StyleSheet.create({

})

export default NavBackgroundHelper;
