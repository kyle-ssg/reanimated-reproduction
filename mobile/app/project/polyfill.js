// Anything that web has that's common, import here
import PropTypes from "prop-types";
import moment from "moment";

// Lodash
import each from "lodash/each";
import map from "lodash/map";
import uniqBy from "lodash/uniqBy";
import filter from "lodash/filter";
import find from "lodash/find";
import partial from "lodash/partial";
import merge from "lodash/merge";
import cloneDeep from "lodash/cloneDeep";
import findIndex from "lodash/findIndex";
import range from "lodash/range";
import keyBy from "lodash/keyBy";
import get from "lodash/get";

global.moment = moment;
global._ = {
  each,
  filter,
  uniqBy,
  find,
  partial,
  findIndex,
  merge,
  range,
  map,
  cloneDeep,
  keyBy,
  get
};
global.propTypes = propTypes;
