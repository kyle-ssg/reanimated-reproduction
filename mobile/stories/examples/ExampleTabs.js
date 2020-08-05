import React, { Component } from 'react';
import Tabs from '../../app/components/Tabs';

export default class extends Component {
  static displayName = 'TheComponent';

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  onTabChange = (index) => this.setState({ activeButton: index });

  renderScene = (scene) => {
    const { i } = scene.route.data;
    const label = `Tab ${i}`;
    return (
        <Flex>
            <Text>
                {label}
            </Text>
        </Flex>
    );
  }


  render() {
    const { state: { activeButton } } = this;
    return (
        <Tabs
          scrollEnabled={this.props.scrollEnabled}
          lazy
          tabBarStyle={{
              backgroundColor: palette.primary,
            }}
          labelStyle={{
              textAlign: 'center',
              color: 'white',
            }}
          indicatorStyle={{
              backgroundColor: 'white',
            }}
          navigationState={{
              index: activeButton || 0,
              routes: [1, 2, 3].map((i) => ({ title: `Tab ${i}`, key: i, data: { i } })),
            }}
          onIndexChange={this.onTabChange}
          renderScene={this.renderScene}
            />
    );
  }
}
