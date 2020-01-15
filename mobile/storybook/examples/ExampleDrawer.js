import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { RNNDrawer, SideMenuView } from 'react-native-navigation-drawer-extension';
import propTypes from 'prop-types';


const CustomDrawer = class extends Component {
    static displayName = 'TheComponent';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <Flex>
                <ReactNative.SafeAreaView>
                    <ListItem>
                        <Text>
                    Hi
                        </Text>
                    </ListItem>
                </ReactNative.SafeAreaView>
            </Flex>
        );
    }
};


const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        direction: propTypes.string,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    showDrawer = () => {
        RNNDrawer.showDrawer({
            component: {
                name: 'CustomDrawer',
                passProps: {
                    animationOpenTime: 300,
                    animationCloseTime: 300,
                    direction: this.props.direction || 'left',
                    dismissWhenTouchOutside: true,
                    fadeOpacity: 0.6,
                    drawerScreenWidth: '75%' || 445, // Use relative to screen '%' or absolute
                    drawerScreenHeight: '100%' || 700,
                    style: { // Styles the drawer container, supports any react-native style
                        backgroundColor: 'white',
                    },
                    parentComponentId: this.props.componentId, // Custom prop, will be available in your custom drawer component props
                },
            },
        });
    }

    render() {
        return (
            <Button onPress={this.showDrawer}>
                Show Menu
            </Button>
        );
    }
};

TheComponent.propTypes = {};

export default TheComponent;

export class ExampleDrawerSwipe extends Component {
    render() {
        return (
            <SideMenuView
              style={{ flex: 1 }}
              right={() => RNNDrawer.showDrawer({
                  component: {
                      name: 'CustomDrawer',
                      passProps: {
                          direction: 'right',
                      },
                  },
              })}
            >
                <Text>Swipe from the left</Text>
            </SideMenuView>
        );
    }
}

Navigation.registerComponent('CustomDrawer', () => RNNDrawer.create(CustomDrawer));
