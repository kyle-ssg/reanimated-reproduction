// eslint-disable-next-line
import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';
import { Provider } from 'react-redux';
import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react-native';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
// eslint-disable-next-line
import { withKnobs } from '@storybook/addon-knobs';
import { getStoreDangerous } from '../app/project/common';


const StorybookUIRoot = getStorybookUI({});
const store = getStoreDangerous();

// import stories
export function setup(cb) {
    configure(() => {
        cb();
    }, module);
}

export const withProvider = (story) => (
    <Provider store={store}>
        { story() }
    </Provider>
);
export const withSafeArea = (story) => (
    <ReactNative.SafeAreaView style={{ flex: 1, marginBottom: 80 }}>
        { story() }
    </ReactNative.SafeAreaView>
);

export const withPaddedContainer = (story) => (
    <Flex style={Styles.p5}>
        { story() }
    </Flex>
);
export const withScrollView = (story) => (
    <Flex style={[Styles.pt10]}>
        <ScrollView style={{ overflow: 'visible' }}>
            { story() }
        </ScrollView>
    </Flex>
);
export const getStory = (name) => storiesOf(name, module)
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    .addDecorator(withSafeArea)
    .addDecorator(withProvider);

export default StorybookUIRoot;
