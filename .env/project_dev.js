
const Project = global.Project = {
    cognito: {
        region: "",
        userPoolId: "",
        userPoolWebClientId: "",
    },
    cognitoMobile: {
        region: "",
        userPoolId: "",
        userPoolWebClientId: "",
    },
    debug: false,
    api: 'http://localhost:4000/',
    ga: '',
    logs: {
        DATA: true,
        STORE: true,
        DISPATCHER: true,
        STORAGE: true,
        SERVER: true,
    },
    grecaptcher: "6Lc1mf4UAAAAAC6uZ0HaGJ3ufgwCXY4GFoNhMeBD",
    formly:"boilerplate",
    mobile: {
        // Enabling secured storage for mobile requires installation of https://www.npmjs.com/package/react-native-secured-storage. See README for further instructions on installation
        useSecuredStorage: false,
    },
};
module.exports = Project;
// if (typeof ENV_NAME !== 'undefined' && typeof ENV_TYPE !== 'undefined') {
// }
