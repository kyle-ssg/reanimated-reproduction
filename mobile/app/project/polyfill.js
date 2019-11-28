import PropTypes from 'prop-types';
// Lodash
import each from 'lodash/each';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import filter from 'lodash/filter';
import find from 'lodash/find';
import partial from 'lodash/partial';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';
import range from 'lodash/range';
import keyBy from 'lodash/keyBy';

global._ = { each, filter, uniqBy, find, partial, findIndex, merge, range, map, cloneDeep, keyBy };
// React Prop Types, todo: move to react-native-globals
global.Any = PropTypes.any;
global.OptionalArray = PropTypes.array;
global.OptionalBool = PropTypes.bool;
global.OptionalFunc = PropTypes.func;
global.OptionalNumber = PropTypes.number;
global.OptionalObject = PropTypes.object;
global.OptionalString = PropTypes.string;
global.OptionalNode = PropTypes.node;
global.OptionalElement = PropTypes.node;
global.oneOf = PropTypes.oneOf;
global.oneOfType = PropTypes.oneOfType;
global.RequiredArray = PropTypes.array.isRequired;
global.RequiredBool = PropTypes.bool.isRequired;
global.RequiredFunc = PropTypes.func.isRequired;
global.RequiredNumber = PropTypes.number.isRequired;
global.RequiredObject = PropTypes.object.isRequired;
global.RequiredString = PropTypes.string.isRequired;
global.RequiredNode = PropTypes.node.isRequired;
global.RequiredElement = PropTypes.node.isRequired;
global.propTypes = PropTypes;
