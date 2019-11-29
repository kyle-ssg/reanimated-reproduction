import React, { Component } from 'react';
import propTypes from 'prop-types';
import Tabs from '../app/components/Tabs';

const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
        defaultValue: propTypes.number,
        titles: propTypes.array.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeButton: props.defaultValue || 0,
        };
    }

    renderChild = (i, key) => {
        return { key, i };
    }

    renderScene = (scene) => {
        return this.props.children[scene.route.index];
    }

    render() {
        const { state: { activeButton } } = this;
        return (
            <Tabs
              lazy
              onIndexChange={this.onIndexChange}
              tabBarStyle={{
                  backgroundColor: pallette.primary,
              }}
              labelStyle={{
                  textAlign: 'center',
                  color: 'white',
              }}
              indicatorStyle={{
                  backgroundColor: 'white',
              }}
              navigationState={{
                  index: activeButton,
                  routes: this.props.titles.map(this.renderChild),
              }}
              renderScene={this.renderScene}
            />
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
