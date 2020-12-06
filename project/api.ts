/* istanbul ignore next */
import Router from "next/router";
import cookie from "cookie";
import cookies from "js-cookie";
import Constants from "common/utils/constants";
import errorHandler from "common/utils/errorHandler";
import Project from "common/project";
import storage from "./async-storage-api";
import { IncomingMessage } from 'http';
const API = {
  isMobile: () => false,
  storage,
  ajaxHandler(type, e) {
    return { type, error: errorHandler(e) };
  },
  logout() {
    cookies.remove("token");
    Router.replace(Project.logoutRedirect || "/");
  },
  loginRedirect() {
    const params = Router.query;
    params.redirect = params.redirect || Project.loginRedirect || "/";
    // @ts-ignore
    Router.replace(params.redirect, params.as || params.redirect, {
      shallow: true,
    });
  },
  getStoredToken(req?:IncomingMessage) {
    return API.storage.getItem("token", req);
  },
  getStoredUser(req) {
    return API.storage.getItem("user", req);
  },
  getStoredRefreshToken(req) {
    return API.storage.getItem("refreshToken", req);
  },
  setStoredRefreshToken(v) {
    return API.storage.setItem("refreshToken", v);
  },
  getStoredLocale(req) {
    if (req) {
      // Attempt to get locale saved cookie
      const parsedCookies = cookie.parse(req.headers.cookie || "");
      if (parsedCookies.locale) {
        return parsedCookies.locale;
      }
      // Attempt to retrieve local from Accept-Language headers
      if (req.headers && req.headers["accept-language"]) {
        const parsedLocale = req.headers["accept-language"].split(",")[0];
        if (parsedLocale) {
          return parsedLocale;
        }
      }
    }
    return Constants.defaultLocale;
  },
  setStoredToken(v) {
    return API.storage.setItem("token", v);
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
        return;
      }
      if ((!data || !data.category || !data.event) && __DEV__) {
        // eslint-disable-next-line
                console.error('Invalid event provided', data);
      }
      ga("send", {
        hitType: "event",
        eventCategory: data.category,
        eventAction: data.event,
        eventLabel: data.label,
      });
    }
    if (Project.mixpanel && typeof mixpanel !== "undefined") {
      if (!data) {
        // eslint-disable-next-line
                console.error("MIXPANEL: Passed null event data")
      }
      if (!data || !data.category || !data.event) {
        // eslint-disable-next-line
                console.error("MIXPANEL: Invalid event provided", data);
      }
      mixpanel.track(data.event, {
        category: data.category,
      });
    }
  },
  trackPage(title: string) {
    if (Project.ga && typeof ga !== "undefined") {
      ga("send", {
        hitType: "pageview",
        title,
        location: document.location.href,
        page: document.location.pathname,
      });
    }
    if (Project.mixpanel && typeof mixpanel !== "undefined") {
      mixpanel.track("Page View", {
        title,
        location: document.location.href,
        page: document.location.pathname,
      });
    }
  },
  alias(id) {
    if (Project.mixpanel && typeof mixpanel !== "undefined") {
      mixpanel.alias(id);
    }
  },
  identify(id) {
    if (Project.mixpanel && typeof mixpanel !== "undefined") {
      mixpanel.identify(id);
    }
  },
  register(email, firstName, lastName) {
    if (Project.mixpanel && typeof mixpanel !== "undefined") {
      mixpanel.register({
        Email: email,
        "First Name": firstName,
        "Last Name": lastName,
      });
    }
  },
  reset() {
    if (Project.mixpanel && typeof mixpanel !== "undefined") {
      mixpanel.reset();
    }
  },
  log(namespace: string, ...args: any[]) {
    if (Project.logs[namespace]) {
      // eslint-disable-next-line no-console
      console.log.apply(this, [namespace, ...args]);
    }
  },
};
global.API = API;
export default API;
