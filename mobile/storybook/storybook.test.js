import initStoryshots, { renderOnly } from '@storybook/addon-storyshots';

// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Settings/Settings.ios.js', () => {});
// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Vibration/Vibration.js', () => {});


initStoryshots({
    test: renderOnly,
});
