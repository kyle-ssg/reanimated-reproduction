import { showBottomSheetWithOptionsDTO } from "react-native-bottomsheet";
import { Middleware } from "redux";
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';



type ShowOptions = ( title: string,
  _options: string[],
  cancelButton?: boolean,
  dark?: boolean,
  destructiveOption?: boolean,
  resolveCancel?: boolean) => Promise<number>


interface Storage {
  getItem(key: string, ...args: Array<any>): any;
  setItem(key: string, value: any, ...args: Array<any>): any;
  removeItem(key: string, ...args: Array<any>): any;
}

type Push = {
  getInitialNotification: () => Promise<FirebaseMessagingTypes.RemoteMessage | null> // TODO: make maintainable
  subscribe: (topic: string) => Promise<void>
  unsubscribe: (topic: string) => Promise<void>
  stop: () => void
  init: (onNotification?: (arg: Object) => void, silent?: boolean) => Promise<string> // TODO
}

type Auth = {

}

export type APIType = {
  isMobile: () => boolean
  reduxStorage: Storage
  middlewares: Middleware[] | null
  ajaxHandler: (type: string, e: any) => { type: string, error: string }
  log: (namespace: string, ...args: any[]) => void
  loggedIn: () => null
  logout: () => void
  logoutComplete: () => void
  trackEvent: (data) => void // TODO
  trackPage: (name: string) => void 
  share: (uri: string, message: string, title: string, subject: string, excludedActivityTypes: string[]) => void
  showOptions: ShowOptions
  getContacts: (includePhotos: boolean) => Promise<{error: string, contacts: Object[]}> 
  showUpload: ( title: string,
    multiple: boolean,
    width: number,
    height: number,
    compressImageQuality: number,
    onStart: (res) => void ) => Promise<ShowOptions> // TODO
  generateLink: (title: string, customMetadata: {}) => Promise<string> 
  getInitialLink: (cb: (link: string) => string | null) => string | null 
  setStoredToken: (val: string) => void // TODO
  setStoredRefreshToken: (val: string) => void
  push: Push
  auth: Auth // TODO
  storage: {} // TODO
}