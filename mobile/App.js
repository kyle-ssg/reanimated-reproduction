import React from 'react';
import StorybookUIRoot from './storybook';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import store from '../common/store';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


enableScreens();
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <>
            <Provider store={store()}>
                <StorybookUIRoot/>
            </Provider>
        </>
    );
};

export default App;
