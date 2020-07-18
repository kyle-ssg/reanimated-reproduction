// import SecuredStorage from 'react-native-secured-storage';
import MMKVStorage from "react-native-mmkv-storage";
let MMKV;

const StorageManager = class {
    init = async () => {
        API.log("STORAGE", "INIT");
        MMKV = new MMKVStorage.Loader()
            // uncommenting this breaks the app
            // .withEncryption()
            .initialize();

        API.log("STORAGE", "INIT DONE");
    }

    clear = async () => {
        API.log("STORAGE", "CLEAR");
        return MMKV.clearStore();
    }

    setNumber = async (key, val) => {
        API.log("STORAGE", "SET NUMBER", key, val);
        return MMKV.setIntAsync(key, val);
    }

    setString = async (key, val) => {
        API.log("STORAGE", "SET STRING", key, val);
        return MMKV.setStringAsync(key, val);
    }

    setObject = async (key, val) => {
        API.log("STORAGE", "SET OBJECT", key, val);
        return MMKV.setMapAsync(key, val);
    }

    setBool = async (key, val) => {
        API.log("STORAGE", "SET BOOL", key, val);
        return MMKV.setBoolAsync(key, val);
    }

    getNumber = async (key) => {
        API.log("STORAGE", "GET NUMBER", key);
        return MMKV.getIntAsync(key);
    }

    getString = async (key) => {
        API.log("STORAGE", "GET STRING", key);
        return MMKV.getStringAsync(key);
    }

    getObject = async (key) => {
        API.log("STORAGE", "GET OBJECT", key);
        return MMKV.getMapAsync(key);
    }

    getBool = async (key) => {
        API.log("STORAGE", "GET BOOL", key);
        return MMKV.getBoolAsync(key);
    }

    removeItem = async (key) => {
        API.log("STORAGE", "REMOVE ITEM", key);
        await MMKV.removeItem(key);
    }

};

module.exports = new StorageManager();
