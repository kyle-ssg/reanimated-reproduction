//Anything that provides functionality that would benefit from being accessed by common

// import Contacts from 'react-native-contacts';
// import BottomSheet from 'react-native-bottomsheet'
// import _analytics from "@react-native-firebase/analytics";  // ^7.3.1
import errorHandler from 'common/utils/errorHandler'
import getStoreDangerous from 'common/store'

import ReactNative from 'react-native'
import storage from './async-storage-api'

import push from './push-notifications-api'
import auth from './auth'
import * as RootNavigation from 'navigation/RootNavigation'
import { RouteUrls } from '../../route-urls'
import 'common/project'
import { APIType } from 'common/api-type'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
// import BottomSheet from 'react-native-bottomsheet'
// import _analytics from '@react-native-firebase/analytics'
// @ts-ignore
const analytics = typeof _analytics === 'undefined' ? undefined : _analytics
// import ImagePicker from 'react-native-image-crop-picker';

export type MobileAPIType = APIType & {
  [extraProps: string]: any
  showOptions: (
    title: string,
    _options: string[],
    cancelButton?: boolean,
    dark?: boolean,
    destructiveOption?: boolean,
    resolveCancel?: (boolean) => Promise<number>,
  ) => Promise<unknown>
  push: {
    getInitialNotification: () => Promise<FirebaseMessagingTypes.RemoteMessage | null>
    subscribe: (topic: string) => Promise<void>
    unsubscribe: (topic: string) => Promise<void>
    stop: () => void
    init: (
      onNotification?: (
        res: FirebaseMessagingTypes.RemoteMessage,
        isForeground: boolean,
      ) => void,
      silent?: boolean,
    ) => Promise<string>
    getToken: () => Promise<string>
  }
}

const API: MobileAPIType = {
  isMobile: () => true,
  getPixelRatio: () => ReactNative.PixelRatio.get(),
  reduxStorage: storage,
  middlewares: __DEV__ ? [require('redux-flipper').default({})] : null,

  ajaxHandler(type, e) {
    return { type, error: errorHandler(e) }
  },
  log(namespace: string, ...args: any[]) {
    if (Project.logs[namespace]) {
      // eslint-disable-next-line no-console
      console.log.apply(this, [namespace, ...args])
    }
  },
  loggedIn: () => null,
  logout: () => {
    RootNavigation.resetTo(0, [{ name: RouteUrls.HomeScreen }])
  },
  logoutComplete: () => {
    const store = getStoreDangerous()
    if (store.getState().user) {
      store.dispatch(AppActions.logout())
    }
  },
  trackEvent(data) {
    if (analytics) {
      const { event, ...rest } = data
      if (!data) {
        // eslint-disable-next-line no-console
        console.error('Passed null event data')
      }
      // eslint-disable-next-line no-console
      console.info('track', data)
      if (!data || !data.category || !data.event) {
        // eslint-disable-next-line no-console
        console.error('Invalid event provided', data)
      }

      analytics().logEvent(event.toLowerCase().replace(/ /g, '_'), rest)
    }
  },
  trackPage(name) {
    if (analytics) {
      analytics().logScreenView({ screen_name: name })
    }
  },
  share: (uri, message, title, subject, excludedActivityTypes) => {
    ReactNative.Share.share(
      { message, title, url: uri },
      { subject, excludedActivityTypes },
    )
  },
  showOptions: (
    title,
    _options,
    cancelButton = true,
    dark = false,
    destructiveOption,
    resolveCancel,
  ) =>
    new Promise((resolve) => {
      const options = cancelButton ? _options.concat(['Cancel']) : _options
      // @ts-ignore
      if (typeof BottomSheet === 'undefined') {
        // @ts-ignore
        alert('Please install react-native-bottomsheet')
        return
      }
      // @ts-ignore
      BottomSheet.showBottomSheetWithOptions(
        {
          options,
          title,
          dark,
          // @ts-ignore
          destructiveButtonIndex:
            destructiveOption && cancelButton
              ? options.length - 2
              : options.length - 1,
          cancelButtonIndex: cancelButton && options.length - 1,
        },
        (value) => {
          if (cancelButton && value === options.length - 1) {
            if (resolveCancel) resolve(null)
            return
          }
          resolve(value)
        },
      )
    }),
  getContacts: (includePhotos) => {
    // @ts-ignore
    if (typeof Contacts === 'undefined') {
      return Promise.reject(
        new Error(
          'You need to link react-native-contacts to use this function',
        ),
      )
    }
    return includePhotos
      ? new Promise((resolve) =>
          // eslint-disable-next-line no-undef
          // @ts-ignore
          Contacts.getAll((error, contacts) =>
            resolve({
              error,
              contacts: contacts,
            }),
          ),
        )
      : new Promise((resolve) =>
          // eslint-disable-next-line no-undef
          // @ts-ignore
          Contacts.getAllWithoutPhotos((error, contacts) =>
            resolve({
              error,
              contacts: contacts,
            }),
          ),
        )
  },
  showUpload: (
    title,
    multiple,
    width,
    height,
    compressImageQuality = 1,
    onStart,
  ) =>
    new Promise((resolve) => {
      API.showOptions(title, ['Camera', 'Upload a Photo']).then((i) => {
        // @ts-ignore
        if (typeof ImagePicker === 'undefined') {
          // eslint-disable-next-line
          // @ts-ignore
          alert(
            'You need to link react-native-image-crop-picker to use this function',
          )
          return
        }
        // todo : handle multiple
        if (i === 0 || i === 1) {
          const options = {
            includeBase64: false,
            cropping: !!(width || height),
            multiple,
            width,
            height,
            // cropperActiveWidgetColor:  palette.primary,
            // cropperStatusBarColor: palette.primary,
            // cropperToolbarColor: palette.primary,
            // cropperToolbarWidgetColor: palette.textMediumDark,
            // cropperToolbarTitle: Strings.editPhoto,
            // cropperCancelText: Strings.cancelEdit,
            compressImageQuality,
            useFrontCamera: true,
          }

          // eslint-disable-next-line no-undef
          // @ts-ignore
          const func = i ? ImagePicker.openPicker : ImagePicker.openCamera

          return func(options).then((res) => {
            onStart && onStart(res)

            resolve(res)
          })
        }
      })
    }),

  setStoredToken(val) {
    if (!val) {
      return API.storage.removeItem('token')
    }
    API.storage.setItem('token', val)
  },

  setStoredRefreshToken(val) {
    if (!val) {
      return API.storage.removeItem('refreshToken')
    }
    API.storage.setItem('refreshToken', val)
  },

  push,
  auth,
  storage,
}

global.API = API

export default API
