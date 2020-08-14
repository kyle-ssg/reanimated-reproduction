// import SecuredStorage from 'react-native-secured-storage';
import MMKVStorage from "react-native-mmkv-storage";
let MMKV;
const StorageManager = class {
    init = async () => {
        if (MMKV) {
            return MMKV;
        }
        API.log("STORAGE", "INIT");
        MMKV = new MMKVStorage.Loader()
            // uncommenting this breaks the app
            // .withEncryption()
            .initialize();

        API.log("STORAGE", "INIT DONE");
        return MMKV;
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
        return MMKV.setStringAsync(key, JSON.stringify(val));
    }

    setBool = async (key, val) => {
        API.log("STORAGE", "SET BOOL", key, val);
        return MMKV.setBoolAsync(key, val);
    }

    getNumber = async (key) => {
        API.log("STORAGE", "GET NUMBER", key);
        return MMKV.getIntAsync(key).catch(e => {
            if (e === 'Value for key does not exist') return null;
            return Promise.reject(e);
        });
    }

    getString = async (key) => {
        API.log("STORAGE", "GET STRING", key);
        return MMKV.getStringAsync(key).catch(e => {
            if (e === 'Value for key does not exist') return null;
            return Promise.reject(e);
        });
    }

    getObject = async (key) => {
        API.log("STORAGE", "GET OBJECT", key);
        return MMKV.getStringAsync(key).then((res)=>res && JSON.parse(res)).catch(e => {
            if (e === 'Value for key does not exist') return null;
            return Promise.reject(e);
        });
    }

    getBool = async (key) => {
        API.log("STORAGE", "GET BOOL", key);
        return MMKV.getBoolAsync(key).catch(e => {
            if (e === 'Value for key does not exist') return null;
            return Promise.reject(e);
        });
    }

    removeItem = async (key) => {
        API.log("STORAGE", "REMOVE ITEM", key);
        await MMKV.removeItem(key);
    }

};

export default new StorageManager();
