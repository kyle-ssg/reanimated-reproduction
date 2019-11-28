import initStoryshots, { renderOnly } from '@storybook/addon-storyshots';
import { init } from '../app/project/common';

// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Settings/Settings.ios.js', () => {});
// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Vibration/Vibration.js', () => {});

init()();

initStoryshots({
    test: renderOnly,
});
