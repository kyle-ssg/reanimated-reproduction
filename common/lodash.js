import chunk from "lodash/chunk";
import cloneDeep from "lodash/cloneDeep";
import debounce from "lodash/debounce";
import each from "lodash/each";
import filter from "lodash/filter";
import find from "lodash/find";
import findIndex from "lodash/findIndex";
import get from "lodash/get";
import indexOf from "lodash/indexOf";
import keyBy from "lodash/keyBy";
import map from "lodash/map";
import merge from "lodash/merge";
import omit from "lodash/omit";
import range from "lodash/range";
import set from "lodash/set";
import sortBy from "lodash/sortBy";
import throttle from "lodash/throttle";
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
  map,
  merge,
  omit,
  range,
  set,
  sortBy,
  throttle,
};
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
