import each from 'lodash/each';
import map from 'lodash/map';
import merge from 'lodash/merge';
import set from 'lodash/set';
import get from 'lodash/get';
import find from 'lodash/find';
import filter from 'lodash/filter';
import cloneDeep from 'lodash/cloneDeep';
import keyBy from 'lodash/keyBy';
import omit from 'lodash/omit';
import indexOf from 'lodash/indexOf';
import sortBy from 'lodash/sortBy';
import chunk from 'lodash/chunk';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import findIndex from 'lodash/findIndex';
import keys from 'lodash/keys';
import range from 'lodash/range';
export {
    chunk,
    cloneDeep,
    debounce,
    each,
    filter,
    find,
    findIndex,
    get,
    indexOf,
    keyBy,
    keys,
    map,
    merge,
    omit,
    range,
    set,
    sortBy,
    throttle,
}
export const lodash = {
    chunk,
    cloneDeep,
    debounce,
    each,
    filter,
    find,
    findIndex,
    get,
    indexOf,
    keyBy,
    map,
    merge,
    omit,
    range,
    set,
    sortBy,
    throttle,
};
global._ = lodash;
export default lodash;
