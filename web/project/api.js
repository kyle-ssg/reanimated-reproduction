/* istanbul ignore next */
const API = {
    ajaxHandler(store, res) {
        if (res instanceof Error) {
            // Catch programming errors
            console.log(res);
            store.error = res.message;
            store.goneABitWest();
            return;
        }
        switch (res.status) {
            case 404:
                // ErrorModal(null, 'API Not found: ');
                break;
            case 503:
                // ErrorModal(null, error);
                break;
            default:
            // ErrorModal(null, error);
        }

        res.clone().json().then((error) => {
            if (store) {
                // eslint-disable-next-line
                store.error = error;
                store.goneABitWest();
            }
        }).catch(() => {
            res.text().then((error) => {
                if (store) {
                    // eslint-disable-next-line
                    console.log(error ? error : 'Unknown error ' + error);
                    // eslint-disable-next-line
                    store.error = error || 'Unknown error';
                    store.goneABitWest();
                }
            })
                .catch((err) => {
                    if (store) {
                        // eslint-disable-next-line
                        console.log('Unknown error', err);
                        const error = 'Unknown error';
                        // eslint-disable-next-line
                        store.error = error;
                        store.goneABitWest();
                    }
                });
        });
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

        if (Project.mixpanel) {
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
        if (Project.ga) {
            ga('send', {
                hitType: 'pageview',
                title,
                location: document.location.href,
                page: document.location.pathname,
            });
        }

        if (Project.mixpanel) {
            mixpanel.track('Page View', {
                title,
                location: document.location.href,
                page: document.location.pathname,
            });
        }
    },
    alias(id) {
        if (Project.mixpanel) {
            mixpanel.alias(id);
        }
    },
    identify(id) {
        if (Project.mixpanel) {
            mixpanel.identify(id);
        }
    },
    register(email, firstName, lastName) {
        if (Project.mixpanel) {
            mixpanel.register({
                'Email': email,
                'First Name': firstName,
                'Last Name': lastName,
            });
        }
    },
    reset() {
        if (Project.mixpanel) {
            mixpanel.reset();
        }
    },
    log() {
        if (__DEV__) {
            // eslint-disable-next-line
            console.log.apply(this, arguments);
        }
    },
    info() {
        if (__DEV__) {
            // eslint-disable-next-line
            console.log.apply(this, arguments);
        }
    },
    error() {
        if (__DEV__) {
            // eslint-disable-next-line
            console.log.apply(this, arguments);
        }
    },
    warn() {
        if (__DEV__) {
            // eslint-disable-next-line
            console.info.apply(this, arguments);
        }
    },
};

global.API = API;
export default API;