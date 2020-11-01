//Anything that provides functionality that would benefit from being accessed by common

// import Contacts from 'react-native-contacts';
import BottomSheet from "react-native-bottomsheet";
// import _analytics from "@react-native-firebase/analytics";  // ^7.3.1
import errorHandler from "common/utils/errorHandler";
import getStoreDangerous from "common/store";

import ReactNative from "react-native";
import storage from "./async-storage-api";

import push from "./push-notifications-api";
import auth from "./auth";

const analytics = typeof _analytics === "undefined" ? undefined : _analytics();

global.API = {
  isMobile: () => true,
  ajaxHandler(type, e) {
    return { type, error: errorHandler(e) };
  },
  log(...args) {
    // eslint-disable-next-line no-console
    console.log(...args);
  },
  loggedIn: () => null,
  logout: () => {
    const user = getStoreDangerous().getState().user;
    if (user) {
      // unsubscribe from push notifications etc
    }
    if (getStoreDangerous().getState().user) {
      getStoreDangerous().dispatch(
        AppActions.logout({
          onSuccess: () => {
            // todo: add for react-navigation
            // routes.logout();
            Alert.alert("Logged out", "You have been logged out");
          },
        })
      );
    }
  },
  logoutComplete: () => {
    if (getStoreDangerous().getState().user) {
      getStoreDangerous().dispatch(AppActions.logout());
    }
  },
  trackEvent(data) {
    if (analytics) {
      const { event, ...rest } = data;
      if (!data) {
        // eslint-disable-next-line no-console
        console.error("Passed null event data");
      }
      // eslint-disable-next-line no-console
      console.info("track", data);
      if (!data || !data.category || !data.event) {
        // eslint-disable-next-line no-console
        console.error("Invalid event provided", data);
      }

      analytics().logEvent(event.toLowerCase().replace(/ /g, "_"), rest);
    }
  },
  trackPage(name) {
    if (analytics) {
      analytics().setCurrentScreen(name, name);
    }
  },
  share: (uri, message, title, subject, excludedActivityTypes) => {
    ReactNative.Share.share(
      { message, title, url: uri },
      { subject, excludedActivityTypes }
    );
  },
  showOptions: (
    title,
    _options,
    cancelButton = true,
    dark = false,
    destructiveOption,
    resolveCancel
  ) =>
    new Promise((resolve) => {
      const options = cancelButton ? _options.concat(["Cancel"]) : _options;
      BottomSheet.showBottomSheetWithOptions(
        {
          options,
          title,
          dark,
          destructiveButtonIndex:
            destructiveOption && cancelButton
              ? options.length - 2
              : options.length - 1,
          cancelButtonIndex: cancelButton && options.length - 1,
        },
        (value) => {
          if (cancelButton && value === options.length - 1) {
            if (resolveCancel) resolve(null);
            return;
          }
          resolve(value);
        }
      );
    }),
  getContacts: (includePhotos) => {
    if (typeof Contacts === "undefined") {
      return Promise.reject(
        new Error("You need to link react-native-contacts to use this function")
      );
    }
    return includePhotos
      ? new Promise((resolve) =>
      // eslint-disable-next-line no-undef
        Contacts.getAll((error, contacts) =>
          resolve({
            error,
            contacts: contacts,
          })
        )
      )
      : new Promise((resolve) =>
      // eslint-disable-next-line no-undef
        Contacts.getAllWithoutPhotos((error, contacts) =>
          resolve({
            error,
            contacts: contacts,
          })
        )
      );
  },
  showUpload: (
    title,
    multiple,
    width,
    height,
    compressImageQuality = 0.8,
    onStart
  ) =>
    new Promise((resolve) => {
      API.showOptions(title, ["Camera", "Upload a Photo"]).then((i) => {
        if (typeof ImagePicker === "undefined") {
          // eslint-disable-next-line
          alert(
            "You need to link react-native-image-crop-picker to use this function"
          );
          return;
        }
        // todo : handle multiple
        if (i === 0 || i === 1) {
          const options = {
            cropping: !!(width || height),
            multiple,
            width,
            height,
            compressImageQuality,
          };

          // eslint-disable-next-line no-undef
          const func = i ? ImagePicker.openPicker : ImagePicker.openCamera;

          return func(options).then(({ path }) => {
            onStart && onStart(path);

            resolve({ path });
          });
        }
      });
    }),
  generateLink: (title, customMetadata) => {
    if (typeof branch === "undefined") {
      // eslint-disable-next-line
      alert("You need to link react-native-branch to use this function");
      return Promise.reject();
    }
    // eslint-disable-next-line no-undef
    return branch
      .createBranchUniversalObject("share", {
        title,
        contentMetadata: {
          customMetadata,
        },
      })
      .then((branchUniversalObject) => {
        const controlParams = {};
        return branchUniversalObject
          .generateShortUrl({}, controlParams)
          .then(({ url }) => url);
      });
  },
  getInitialLink: (cb) => {
    // eslint-disable-next-line
    initialLinkCb = cb;
    // eslint-disable-next-line
    return initialLink ? cb(link) : null;
  },

  setStoredToken(val) {
    if (!val) {
      return API.storage.removeItem("token");
    }
    API.storage.setString("token", val);
  },

  setStoredRefreshToken(val) {
    if (!val) {
      return API.storage.removeItem("refreshToken");
    }
    API.storage.setString("refreshToken", val);
  },

  push,
  auth,
  storage,
};

if (typeof branch !== "undefined") {
  let linkCb = null;
  // eslint-disable-next-line
  var initialLinkCb = null;
  // eslint-disable-next-line
  var link = null;
  // eslint-disable-next-line
  var checkedInitialLink = null;
  // eslint-disable-next-line
  var initialLink = null;

  API.onLink = (cb) => (linkCb = cb);
  // eslint-disable-next-line no-undef
  branch.subscribe(({ error, params }) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(`Error from Branch: ${error}`);
      return;
    }

    if (params["+clicked_branch_link"]) {
      link = params;

      if (!checkedInitialLink) {
        initialLink = params;
        if (initialLinkCb) initialLinkCb(params);
      } else if (linkCb) {
        linkCb(params);
      }
    }
    checkedInitialLink = true;
  });
}

export default API;
