import ProjectType from 'common/project-type';

const Project:ProjectType = global.Project = {
  debug: false,
  api: 'https://api.staging.siteassist.co/api/',
  ga: '',
  cognito: {
    region: "eu-west-2",
    userPoolId: "eu-west-2_MYASoetyk",
    userPoolWebClientId: "3i0fbd7g8jlnn2m8ndj30fte5f",
  },
  cognitoMobile: {
    region: "eu-west-2",
    userPoolId: "eu-west-2_MYASoetyk",
    userPoolWebClientId: "7jj8ekqf4l8o33abt55s9jve8a",
  },
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
export default Project;
// if (typeof ENV_NAME !== 'undefined' && typeof ENV_TYPE !== 'undefined') {
// }
