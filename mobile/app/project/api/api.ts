//Anything that provides functionality that would benefit from being accessed by common

import { AppActions } from 'common/app-actions'
import 'common/project'
import { default as getStoreDangerous } from 'common/store'
// import _analytics from "@react-native-firebase/analytics";  // ^7.3.1
import { APIType } from 'common/types/api-type'
import { errorHandler } from 'common/utils/errorHandler'
import { Alert, PixelRatio, Share } from 'react-native'
// import BottomSheet from 'react-native-bottomsheet'
import storage from './async-storage-api'
import auth from './auth'
// import ImagePicker from 'react-native-image-crop-picker';
import push from './push-notifications-api'
import { Strings } from 'project/localisation'
import { Project } from 'common/project'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import * as RootNavigation from 'navigation/RootNavigation'
import { setApi } from 'common/api/api'
import { RouteUrls } from '../../route-urls'

// @ts-ignore
const analytics = typeof _analytics === 'undefined' ? undefined : _analytics

const ratio = PixelRatio.get()
interface MobileAPI extends APIType<FirebaseMessagingTypes.RemoteMessage> {
  showOptions: any
  share: any
  showUpload: any
}

const API: MobileAPI = {
  isMobile: () => true,
  getPixelRatio: () => ratio,
  reduxStorage: storage,
  middlewares:
    __DEV__ && !process.env.JEST_WORKER_ID
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
        [require('redux-flipper').default({})]
      : null,
  ajaxHandler(type, e) {
    return {
      type,
      error: errorHandler({
        defaultErrorMessage: Strings.defaultErrorMessage,
        gatewayTimeoutError: Strings.gatewayTimeoutError,
      })(e),
    }
  },
  log(namespace: string, ...args: any[]) {
    if (Project.logs[namespace]) {
      // eslint-disable-next-line no-console
      console.log.apply(this, [namespace, ...args])
    }
  },
  loginRedirect() {
    RootNavigation.resetTo(0, [{ name: RouteUrls.HomeScreen }])
  },
  logout: () => {
    const store = getStoreDangerous()
    if (store.getState().user) {
      store.dispatch(AppActions.logout({}))
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
  identify(id: string) {
    API.log('EVENTS', 'IDENTIFY', id)
  },
  trackPage(name, data = {}) {
    if (analytics) {
      analytics().logEvent(`Screen_${name.replace(/ /g, '_')}`, data)
      API.log('EVENTS', `Screen_${name}`, data)
    }
  },
  share: (uri, message, title, subject, excludedActivityTypes) => {
    Share.share(
      { message, title, url: uri },
      { subject, excludedActivityTypes },
    )
  },
  showOptions: (
    title,
    _options,
    cancelButton = true,
    dark = false,
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
        // @ts-expect-error
        if (typeof ImagePicker === 'undefined') {
          Alert.alert(
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

          // @ts-expect-error
          // eslint-disable-next-line no-undef
          const func = i ? ImagePicker.openPicker : ImagePicker.openCamera

          return func(options).then((res) => {
            onStart && onStart(res)

            resolve(res)
          })
        }
      })
    }),

  push,
  auth,
  storage,
  getAPIBaseUrl: () => Project.api,
}
setApi(API)
export { API }
