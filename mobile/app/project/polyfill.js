import PropTypes from 'prop-types';
//Lodash
import each from 'lodash/each';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import filter from 'lodash/filter';
import find from 'lodash/find';
import partial from 'lodash/partial';
import merge from 'lodash/cloneDeep';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';
import range from 'lodash/range';
import keyBy from 'lodash/keyBy';

window._ = {each, filter,uniqBy, find, partial, findIndex, merge, range, map, cloneDeep, keyBy};
//React Prop Types, todo: move to react-native-globals
window.Any = PropTypes.any;
window.OptionalArray = PropTypes.array;
window.OptionalBool = PropTypes.bool;
window.OptionalFunc = PropTypes.func;
window.OptionalNumber = PropTypes.number;
window.OptionalObject = PropTypes.object;
window.OptionalString = PropTypes.string;
window.OptionalNode = PropTypes.node;
window.OptionalElement = PropTypes.node;
window.oneOf = PropTypes.oneOf;
window.oneOfType = PropTypes.oneOfType;
window.RequiredArray = PropTypes.array.isRequired;
window.RequiredBool = PropTypes.bool.isRequired;
window.RequiredFunc = PropTypes.func.isRequired;
window.RequiredNumber = PropTypes.number.isRequired;
window.RequiredObject = PropTypes.object.isRequired;
window.RequiredString = PropTypes.string.isRequired;
window.RequiredNode = PropTypes.node.isRequired;
window.RequiredElement = PropTypes.node.isRequired;

import Interactable from 'react-native-interactable';
global.Interactable = Interactable;

import Animation from 'lottie-react-native';
global.Animation = Animation;

import Navigation from 'react-native-navigation';
global.Navigation = Navigation;