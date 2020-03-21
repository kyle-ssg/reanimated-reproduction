/* istanbul ignore next */
import Constants from '../common/utils/constants';
import Router from 'next/router';
import cookie from 'cookie';
import cookies from 'js-cookie';

import errorHandler from 'common/utils/errorHandler';
import Project from '../common/project';

const API = {
    isMobile: () => false,
    ajaxHandler(type, e) {
        return { type, error: errorHandler(e) };
    },
    logout() {
        cookies.remove('token');
        Router.replace(Project.logoutRedirect || '/');
    },
    loginRedirect() {
        const params = Router.query;
        params.redirect = params.redirect || Project.loginRedirect;
        Router.replace(params.redirect, params.as || params.redirect, { shallow: true });
    },
    getStoredToken(req) {
        if (req) {
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            return parsedCookies && parsedCookies.token;
        }
        return cookies.get('token');
    },
    getStoredUser(req) {
        if (req) {
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            return parsedCookies && parsedCookies.user;
        }
        return cookies.get('user') && JSON.parse(cookies.get('user'));
    },
    getStoredRefreshToken(req) {
        if (req) {
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            return parsedCookies && parsedCookies.refreshToken;
        }
        const refreshToken = cookies.get('refreshToken');
        return refreshToken && JSON.parse(refreshToken);
    },
    setStoredRefreshToken(v) {
        return API.setCookie('refreshToken', v);
    },
    getStoredLocale(req) {
        if (req) {
            // Attempt to get locale saved cookie
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            if (parsedCookies.locale) {
                return parsedCookies.locale;
            }
            // Attempt to retrieve local from Accept-Language headers
            if (req.headers && req.headers['accept-language']) {
                const parsedLocale = req.headers['accept-language'].split(',')[0];
                if (parsedLocale) {
                    return parsedLocale;
                }
            }
        }

        return Constants.defaultLocale;
    },
    getCookie(name, req) {
        if (req) {
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            return parsedCookies && parsedCookies[name];
        }
        if (typeof window === 'undefined') {
            console.log('Error, attempted to get a cookie without a request');
            return;
        }
        return cookies.get(name);
    },
    setStoredToken(v) {
        return API.setCookie('token', v);
    },
    setCookie(name, value) {
        if (typeof window === 'undefined') {
            return;
        }
        return cookies.set(name, value);
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
            ga('send', {
                hitType: 'event',
                eventCategory: data.category,
                eventAction: data.event,
                eventLabel: data.label,
            });
        }

        if (Project.mixpanel && typeof mixpanel !== 'undefined') {
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
    trackPage(title) {
        if (Project.ga && typeof ga !== 'undefined') {
            ga('send', {
                hitType: 'pageview',
                title,
                location: document.location.href,
                page: document.location.pathname,
            });
        }

        if (Project.mixpanel && typeof mixpanel !== 'undefined') {
            mixpanel.track('Page View', {
                title,
                location: document.location.href,
                page: document.location.pathname,
            });
        }
    },
    alias(id) {
        if (Project.mixpanel && typeof mixpanel !== 'undefined') {
            mixpanel.alias(id);
        }
    },
    identify(id) {
        if (Project.mixpanel && typeof mixpanel !== 'undefined') {
            mixpanel.identify(id);
        }
    },
    register(email, firstName, lastName) {
        if (Project.mixpanel && typeof mixpanel !== 'undefined') {
            mixpanel.register({
                'Email': email,
                'First Name': firstName,
                'Last Name': lastName,
            });
        }
    },
    reset() {
        if (Project.mixpanel && typeof mixpanel !== 'undefined') {
            mixpanel.reset();
        }
    },
    log(namespace, ...args) {
        if (Project.logs[namespace]) {
            // eslint-disable-next-line no-console
            console.log.apply(this, [namespace, ...args]);
        }
    },
};

global.API = API;
export default API;
