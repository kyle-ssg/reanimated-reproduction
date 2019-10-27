const Constants = global.Constants = {
    events: {
        'LOGIN': { 'event': 'User login', 'category': 'User' },
        'REGISTER': { 'event': 'User register', 'category': 'User' },
    },
    defaultLocale: 'en',
    simulate: {
        FORCE_LANGUAGE: false, // set to "en" etc to specify a language
    },
    statusBarHeight: 0, // gets set on launch
    pages: {
        NOT_FOUND: 'Not Found',
        HOME_PAGE: 'Home',
    },
};

export default Constants;
