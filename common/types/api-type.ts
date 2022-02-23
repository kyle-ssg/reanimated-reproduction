import { Middleware } from 'redux'
import { Project } from '../project'

export interface StorageType {
  init: () => Promise<any>
  clear: () => Promise<boolean>
  getItem: (key: string, req?: any) => Promise<string>
  setItem: (
    key: string,
    value: string,
    req?: any,
  ) => undefined | Promise<unknown>
  removeItem: (key: string, req?: any) => undefined | Promise<unknown>
}

export interface PushType<NotificationType> {
  token: null | string
  onNotification: (
    notification: NotificationType,
    isForeground: boolean,
  ) => void
  _notificationListener?: (
    notification: NotificationType,
    forground: boolean,
  ) => void
  init: (
    onMessage: (notification: NotificationType, isForeground: boolean) => void,
    silent?: boolean,
  ) => Promise<void>
  getInitialNotification: () => NotificationType
  getToken: () => Promise<string | null | undefined>
  subscribe: (topic: string) => Promise<void> | void
  unsubscribe: (topic: string) => Promise<void> | void
  stop: () => Promise<void> | void
  refreshTokenListener?: (token: string) => string
}
export interface APIType<NotificationType = any> {
  isMobile: () => boolean
  reduxStorage?: StorageType
  middlewares: Middleware[] | []
  ajaxHandler: (type: string, e: any) => { type: string; error: string }
  log: (namespace: keyof typeof Project['logs'], ...args: any[]) => void
  logout: () => void
  loginRedirect: () => void
  logoutRedirect?: () => void
  trackEvent: (data: { event: string; [extraProps: string]: any }) => void
  trackPage: (name: string, data?: Record<string, any>) => void
  setStoredToken?: (val: string) => Promise<void>
  setStoredRefreshToken?: (val: string) => Promise<void>
  storage?: StorageType
  getPixelRatio?: () => number
  auth?: { Cognito: any } // todo
  perf?: {
    trackRequest: (url: string, method: string) => Promise<any>
    trackRequestEnd: (metric: number, response: Response) => Promise<void>
  }
  push?: PushType<NotificationType>
  identify: (id: string) => void
  getAPIBaseUrl: () => string
}
