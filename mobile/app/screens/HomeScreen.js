/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

const TermsScreen = class extends Component {
  static propTypes = {
      componentId: propTypes.string,
  };

  static displayName = 'TermsScreen';

  constructor(props, context) {
      super(props, context);
      this.state = {
      };
  }

  componentWillMount() {
      Navigation.events().bindComponent(this);
  }

  navigateArticle = (id) => {
      Navigation.push(this.props.componentId, routes.articleScreen(id, 'Article'));
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidAppear() {
      API.trackPage('Home');
  }

  render() {
      const { state: { from, activeButton } } = this;
      return (
          <Flex style={[Styles.body]}>
                <Text>hi</Text>
          </Flex>
      );
  }
};

const styles = StyleSheet.create({

});

module.exports = TermsScreen;
