import '../common/utils';
import './api';
import './libs';

import '../components/base';
import './localization';
import '../styles/styles.scss';

import React from 'react';
import Link from 'next/link';

global.Link = Link;

// For debugging reasons for re-rendering components we use whyDidYouRender in dev mode
if (typeof __DEV__ !== 'undefined' && __DEV__ && typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js'); whyDidYouRender(React);
}
