import Router from 'next/router'
import { Constants } from 'common/utils/constants'
import { errorHandler } from 'common/utils/errorHandler'
import { Project } from 'common/project'
import { IncomingMessage } from 'http'
import acceptLanguageParser from 'accept-language-parser'
import Strings from './localisation'
import { APIType } from 'common/types/api-type'
import { setApi } from 'common/api'
import storage from './async-storage-api'
interface WebAPI extends APIType {
  getStoredLocale: (req?: IncomingMessage) => Promise<string>
  logoutRedirect: () => void
}

const API: WebAPI = {
  isMobile: () => false,
  storage,
  logout() {
    // cookies.remove('token')
    Router.replace(Project.logoutRedirect || '/')
  },
  loginRedirect() {
    const params = Router.query
    // const profile:AppState['profile'] = _store().getState().profile;
    params.redirect = params.redirect || Project.loginRedirect || '/'
    // @ts-ignore
    Router.replace(params.redirect, params.as || params.redirect, {
      shallow: true,
    })
  },
  logoutRedirect() {
    const redirect = encodeURIComponent(Router.route)
    const as = encodeURIComponent(Router.asPath)
    let path = `/?redirect=${redirect}`
    if (redirect !== as) {
      path += `&as=${as}`
    }
    Router.replace(path)
  },
  ajaxHandler(type: string, e?: { message: string }) {
    return {
      type,
      error: errorHandler({
        defaultErrorMessage: Strings.defaultErrorMessage,
        gatewayTimeoutError: Strings.gatewayTimeoutError,
      })(e),
    }
  },
  middlewares: [],
  getStoredLocale: async (req?: IncomingMessage) => {
    if (req?.headers?.['accept-language']) {
      const acceptLanguages = acceptLanguageParser.parse(
        req.headers['accept-language'],
      )

      if (Array.isArray(acceptLanguages)) {
        return acceptLanguages[0]?.code || Constants.defaultLocale
      }
    }
    return Constants.defaultLocale
  },
  trackEvent(data) {
    if (__DEV__) {
      // eslint-disable-next-line
      console.info('track', data);
    }
    if (Project.ga) {
      if (!data) {
        // eslint-disable-next-line
        console.error('GA: Passed null event data');
        return
      }
      if ((!data || !data.category || !data.event) && __DEV__) {
        // eslint-disable-next-line
        console.error('Invalid event provided', data);
      }
      // @ts-ignore
      ga('send', {
        hitType: 'event',
        eventCategory: data.category,
        eventAction: data.event,
        eventLabel: data.label,
      })
    }
    // @ts-ignore
    if (Project.mixpanel && typeof mixpanel !== 'undefined') {
      if (!data) {
        // eslint-disable-next-line
        console.error("MIXPANEL: Passed null event data")
      }
      if (!data || !data.category || !data.event) {
        // eslint-disable-next-line
        console.error("MIXPANEL: Invalid event provided", data);
      }
      // @ts-ignore
      mixpanel.track(data.event, {
        category: data.category,
      })
    }
  },
  trackPage(title: string) {
    // @ts-ignore
    if (Project.ga && typeof ga !== 'undefined') {
      // @ts-ignore
      ga('send', {
        hitType: 'pageview',
        title,
        location: document.location.href,
        page: document.location.pathname,
      })
    }
    // @ts-ignore
    if (Project.mixpanel && typeof mixpanel !== 'undefined') {
      // @ts-ignore
      mixpanel.track('Page View', {
        title,
        location: document.location.href,
        page: document.location.pathname,
      })
    }
  },
  identify(id) {
    // @ts-ignore
    if (Project.mixpanel && typeof mixpanel !== 'undefined') {
      // @ts-ignore
      mixpanel.identify(id)
    }
  },
  // @ts-ignore
  log(namespace: keyof typeof Project['logs'], ...args: any[]) {
    if (Project.logs[namespace]) {
      // eslint-disable-next-line no-console
      console.log.apply(this, [namespace, ...args])
    }
  },
  getAPIBaseUrl: () => process.env.NEXT_PUBLIC_API_URL || '',
}
setApi(API)
export { API }
