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
import _store from '../../common/store';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const StorybookUIRoot = getStorybookUI({
    asyncStorage: require('@react-native-community/async-storage').default
});
const store = _store();

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
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, marginBottom: 80 }}>
            { story() }
        </SafeAreaView>
    </SafeAreaProvider>
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
