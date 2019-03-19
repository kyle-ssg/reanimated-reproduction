import React from 'react';
import propTypes from 'prop-types';

import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import {
    AsyncStorage, AppState, NetInfo, Clipboard,
} from 'polyfill-react-native';
import { hot } from 'react-hot-loader';
import Switch from 'rc-switch';

// Util
import '../../common/utils/utils';
import '../../common/utils/format';
import '../../common/constants';
import '../../common/project';

// Flux
import '../../common/dispatcher/dispatcher';
import '../../common/dispatcher/app-actions';
import '../../common/dispatcher/action-constants';
import '../../common/ES6Component';

// Grid Components
import '../components/base/grid/FormGroup';
import '../components/base/grid/Row';
import '../components/base/grid/Flex';
import '../components/base/grid/Column';

// Form Components
import '../components/base/forms/Input';
import '../components/base/forms/InputGroup';
import '../components/base/forms/Button';
import '../components/base/forms/Panel';
import '../components/base/forms/Tabs';
import { Radio, RadioGroup } from '../components/base/forms/Radio';

import '../components/base/HighlightKeyword';

window.Radio = Radio;
window.RadioGroup = RadioGroup;


window.React = React;
// eslint-disable-next-line
console.log(propTypes);
React.PropTypes = propTypes;
window.propTypes = propTypes;
window.hot = hot;
window.AppState = AppState;
window.NetInfo = NetInfo;
window.Clipboard = Clipboard;
window.AsyncStorage = AsyncStorage;
window.Switch = Switch;

// TODO: We may be able to remove these with new babel env preset

// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}

// Object Assign
/* eslint-disable */
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    const to = Object(target);

    for (let index = 1; index < arguments.length; index++) {
      const nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (const nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}
