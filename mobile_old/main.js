import React from 'react';
import App from './components/App';
import {
    StackNavigator,
} from 'react-navigation';

const SimpleStack = StackNavigator({
    Home: {
        screen: require('./components/examples/Examples'),
        title: 'Home',
        navigationOptions: ({ navigation }) => ({
            title: `Home`,
        }),

    },
    Other: {
        path: '/other',
        screen: require('./components/examples/OtherPage'),
    },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colour.navBar
        },
        headerTintColor: colour.navBarText,
    },
});

export default <App><SimpleStack/></App>;
