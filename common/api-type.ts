import { Middleware } from 'redux'
import { IncomingMessage } from 'http'
type CallbackType = (err: any, data: any) => void

export interface Storage {
  init: () => Promise<any>
  clear: () => Promise<void>
  getItem: (
    key: string,
    req?: IncomingMessage | CallbackType,
  ) => Promise<string>
  setItem: (
    key: string,
    value: string,
    req?: IncomingMessage,
  ) => undefined | Promise<unknown>
  removeItem: (
    key: string,
    req?: IncomingMessage,
  ) => undefined | Promise<unknown>
}

export type APIType = {
  isMobile: () => boolean
  reduxStorage: Storage
  middlewares: Middleware[] | null
  ajaxHandler: (type: string, e: any) => { type: string; error: string }
  log: (namespace: string, ...args: any[]) => void
  loggedIn: () => null
  logout: () => void
  trackPage: (name: string) => void
  setStoredToken: (val: string) => Promise<void>
  setStoredRefreshToken: (val: string) => Promise<void>
  storage: Storage
  noPicksAvailable: any
  getPixelRatio: () => number
  auth: { Cognito: any } // todo
  trackEvent: (data) => void // TODO
}
