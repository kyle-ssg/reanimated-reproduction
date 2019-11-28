import React from 'react';
import 'react-native-globals';

import '../app/style/style_screen';
import '../app/project/base-components';

import TheComponent, { getStory, withPaddedContainer, withScrollView, setup } from './setup';
import { dataTransforms } from '../app/project/common';
import { pact } from '../../janus-frontend-common'; // LOCAL DEV ONLY!

setup(() => {
    getStory('Bits')
        .addDecorator(withPaddedContainer)
        .add('default', () => (
            <ScrollView>

            </ScrollView>
        ));
});

export default TheComponent;
