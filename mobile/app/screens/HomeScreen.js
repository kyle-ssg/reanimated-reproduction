/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

const HomeScreen = class extends Component {
  static displayName = 'HomeScreen';

  static propTypes = {
      componentId: propTypes.string,
      navigator: propTypes.object,
  };

  componentDidMount() {
      Navigation.events().bindComponent(this);
  }

  render() {
      return (
          <ReactNative.SafeAreaView style={[Styles.body, Styles.centeredContainer]}>
              <H1>SSG Boilerplate</H1>
              <Text>To see the markup page, toggle Constants.STORYBOOK {Constants.STORYBOOK}</Text>
              <TouchableOpacity onPress={()=>Navigation.push("root", routes.homeScreen())}>
                  <Text>
                      Push to screen
                  </Text>
              </TouchableOpacity>
          </ReactNative.SafeAreaView>
      );
  }
};

module.exports = HomeScreen;
