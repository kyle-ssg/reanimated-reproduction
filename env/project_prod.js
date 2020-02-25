export default global.Project = {
    debug: false,
    api: '',
    ga: '',
    logs: {
        DATA: true,
        STORE: true,
        DISPATCHER: true,
        SERVER: true,
    },
    mobile: {
        // Enabling secured storage for mobile requires installation of https://www.npmjs.com/package/react-native-secured-storage. See README for further instructions on installation
        useSecuredStorage: false,
    },
};
// if (typeof ENV_NAME !== 'undefined' && typeof ENV_TYPE !== 'undefined') {
// }
