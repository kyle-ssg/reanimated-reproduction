import {
    AsyncStorage, AppState, NetInfo, Clipboard,
} from 'polyfill-react-native';

import '../common/utils';
import './api';
import './libs';

import '../components/base';
import './localization';
import '../styles/styles.scss';
import './project-components';

import React from 'react';
import Link from 'next/link';
import 'ionicons/dist/css/ionicons.css';

global.AppState = AppState;
global.NetInfo = NetInfo;
global.Clipboard = Clipboard;
global.AsyncStorage = AsyncStorage;
global.Link = Link;

// For debugging reasons for re-rendering components we use whyDidYouRender in dev mode
if (typeof __DEV__ !== 'undefined' && __DEV__ && typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js'); whyDidYouRender(React);
}
