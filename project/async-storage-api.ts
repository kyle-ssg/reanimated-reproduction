// import SecuredStorage from 'react-native-secured-storage';
import cookie from "cookie";
import jsCookie from "js-cookie";
import { IncomingMessage } from "http";
const StorageManager = class {
  init = async () => {};
  clear = async () => {
    console.error("Web does not support clear cookies");
  };
  getItem = function(key: string, req: IncomingMessage) {
    API.log("STORAGE", "GET", key, req);
    if (req && typeof window === 'undefined') {
      return Promise.resolve(cookie.parse(req.headers.cookie||"")[key])
    }
    return Promise.resolve(jsCookie.get(key));
  }
  setItem = function (key:string, value:string, req?:IncomingMessage) {
    if (typeof window === "undefined" && req) {
      //todo: set cookie on server, probably need res to do res.setHeader
      return;
    }
    API.log("STORAGE", "SET", key, value);
    return Promise.resolve(jsCookie.set(key, value));
  }
  removeItem = function (key:string, req?:IncomingMessage) {
    API.log("STORAGE", "REMOVE", key, req);
    if (typeof window === "undefined") {
      //todo: should be able to set this in nodejs
      return;
    }
    return Promise.resolve(jsCookie.remove(name));
  }
};
export default new StorageManager();
