// import SecuredStorage from 'react-native-secured-storage';
import cookie from "cookie";
import jsCookie from "js-cookie";
import { IncomingMessage } from "http";
const getItem = function (key: string, req: IncomingMessage) {
  API.log("STORAGE", "GET", key, req);
  if (req && typeof window === 'undefined') {
    return cookie.parse(req.headers.cookie)[key]
  }
  return jsCookie.get(key);
};
const setItem = function (key:string, value:string, req?:IncomingMessage) {
  if (typeof window === "undefined" && req) {
    //todo: set cookie on server, probably need res to do res.setHeader
    return;
  }
  API.log("STORAGE", "SET", key, value);
  return jsCookie.set(key, value);
};
const removeItem = function (key:string, req?:IncomingMessage) {
  API.log("STORAGE", "REMOVE", key, req);
  if (typeof window === "undefined") {
    //todo: should be able to set this in nodejs
    return;
  }
  return jsCookie.remove(name);
};
const StorageManager = class {
  init = async () => {};
  clear = async () => {
    console.error("Web does not support clear cookies");
  };
  setNumber = async (key: string, val?:number, req?:IncomingMessage) => {
    return setItem(key, typeof val === 'number'? `${val}`:val, req);
  };
  setString = async (key: string, val, req?: any) => {
    return setItem(key, val, req);
  };
  setMap = async (key, val:Record<any, any>, req?: IncomingMessage) => {
    return setItem(key, val && JSON.stringify(val), req);
  };
  setBool = async (key:string, val:string|null, req?: IncomingMessage) => {
    return setItem(key, `${val}`, req);
  };
  getNumber = async (key, req?: IncomingMessage) => {
    return getItem(key, req);
  };
  getString = async (key, req?: IncomingMessage) => {
    return getItem(key, req);
  };
  getObject = async (key, req?: IncomingMessage) => {
    return getItem(key, req);
  };
  getBool = async (key, req?: IncomingMessage) => {
    return getItem(key, req);
  };
  removeItem = async (key, req?: IncomingMessage) => {
    return removeItem(key, req);
  };
};
export default new StorageManager();
