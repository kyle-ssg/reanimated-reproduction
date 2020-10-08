// Sets item in reducer as loading, clears error for that item
import filter from "lodash/filter";

export const itemLoading = (state, prefix) => {
  state[`${prefix}Error`] = null;
  state[`${prefix}Loading`] = true;
};

export const itemSaving = (state, prefix) => {
  state[`${prefix}Error`] = null;
  state[`${prefix}Saving`] = true;
};

// todo: perhaps we need loading/errors to be based on particular ids i.e. dont show user 2 as saving if it's just user 1
// Sets item in reducer as loaded, clears error for that item
export const itemLoaded = (
  state,
  prefix,
  action,
  skipLoadingLoaded = false
) => {
  if (action.index) {
    // Item is part of a collection, add it within the prefix
    if (!state[prefix]) {
      state[prefix] = {};
    }
    state[prefix][action.index] = action.data;
    if (!skipLoadingLoaded) {
      state[`${prefix}Error`] = null;
      state[`${prefix}Loading`] = false;
    }
  } else {
    state[prefix] = action.data;
    if (!skipLoadingLoaded) {
      state[`${prefix}Loading`] = false;
      state[`${prefix}Error`] = null;
    }
  }
};

export const itemSaved = (state, prefix, action, skipSavingSaved = false, skipReplaceData = false) => {
  if (action.index) {
    // Item is part of a collection, add it within the prefix
    if (!state[prefix]) {
      state[prefix] = {};
    }
    if (!skipReplaceData) {
      state[prefix][action.index] = action.data;
    }
    if (!skipSavingSaved) {
      state[`${prefix}Error`] = null;
      state[`${prefix}Saving`] = false;
    }
  } else if (!skipSavingSaved) {
    if (!skipReplaceData) {
      state[prefix] = action.data;
    }
    state[`${prefix}Saving`] = false;
    state[`${prefix}Error`] = null;
  }
};

// Adds an item to the reducer collection, if one exists with the same ID it will be updated
// eslint-disable-next-line no-unused-vars
export const appendItem = (state, prefix, action) => {
  state[prefix] = filter(
    state[prefix],
    (i) => i.id !== action.data.id
  ).concat([action.data]);
};

// Removes an item from a collection based on an ID
// eslint-disable-next-line no-unused-vars
export const deleteItem = (state, prefix, action) => {
  state[prefix] = filter(state[prefix], (i) => i.id !== action.data.id);
};

export const itemError = (state, prefix, action) => {
  state[`${prefix}Error`] = action.error;
  state[`${prefix}Loading`] = false;
  state[`${prefix}Saving`] = false;
};
