/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, { Component } from 'react';

const TermsScreen = class extends Component {
  static propTypes = {
  };

  static displayName = 'TermsScreen';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  componenDidMount() {
      Navigation.events().bindComponent(this);
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidAppear() {
      API.trackPage('Example');
  }

  render() {
      return (
          <Flex style={[Styles.body, Styles.container]}>
              <ScrollView style={{ flex: 1 }}>
                  <Text>Terms and conditions</Text>
              </ScrollView>
          </Flex>
      );
  }
};

module.exports = TermsScreen;
