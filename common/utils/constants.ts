import { RouteUrls } from "../../mobile/app/route-urls";

const Constants = (global.Constants = {
  events: {
    LOGIN: { event: "User login", category: "User" },
    REGISTER: { event: "User register", category: "User" },
  },
  defaultLocale: "en",
  STORYBOOK: __DEV__ && false,
  simulate: __DEV__ && {
    // CONFIRM_EMAIL: true,
    // FORCE_PAGE: RouteUrls.login,
    FORCE_LANGUAGE: false, // set to "en" etc to specify a language
  },
  statusBarHeight: 0, // gets set on launch
  pages: {
    NOT_FOUND: "Not Found",
    HOME_PAGE: "Home",
  },
  // <title>
  titles: {
    home: "The Web App", // Used by default on all pages
    NOT_FOUND: "Not Found",
    HOME_PAGE: "Home",
  },
  // meta:description
  descriptions: {
    // Used by default
    home: "",
  },
  // meta:description
  keywords: {
    // Used by default
    home: "",
  },
});

export default Constants;
