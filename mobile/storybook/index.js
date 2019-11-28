import React from 'react';
import 'react-native-globals';

import '../app/style/style_screen';
import '../app/project/base-components';

import TheComponent, { getStory, withPaddedContainer, setup } from './setup';

setup(() => {
    getStory('Bits')
        .addDecorator(withPaddedContainer)
        .add('default', () => (
            <ScrollView />
        ));
});

export default TheComponent;
