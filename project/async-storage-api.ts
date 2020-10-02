// import SecuredStorage from 'react-native-secured-storage';
import cookie from "cookie";
import jsCookie from "js-cookie";
const getItem = function (key: any, req: any) {
  API.log("STORAGE", "GET", key, req);
  if (req) {
    const parsedCookies = cookie.parse(req.headers.cookie || "");
    return parsedCookies && parsedCookies.token;
  }
  if (typeof window === "undefined") {
    return "";
  }
  return jsCookie.get("token");
};
const setItem = function (key, value, req) {
  if (typeof window === "undefined") {
    //todo: should be able to set this in nodejs
    return;
  }
  return jsCookie.set(name, value, req);
};
const removeItem = function (key, req) {
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
  setNumber = async (key: string, val, req?:any) => {
    setItem(key, val, req);
  };
  setString = async (key: string, val, req?: any) => {
    setItem(key, val, req);
  };
  setMap = async (key, val, req) => {
    setItem(key, val, req);
  };
  setBool = async (key, val, req) => {
    setItem(key, val, req);
  };
  getNumber = async (key, req) => {
    getItem(key, req);
  };
  getString = async (key, req) => {
    getItem(key, req);
  };
  getObject = async (key, req) => {
    getItem(key, req);
  };
  getBool = async (key, req) => {
    getItem(key, req);
  };
  removeItem = async (key, req) => {
    await removeItem(key, req);
  };
};
export default new StorageManager();