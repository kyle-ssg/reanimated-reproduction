// import SecuredStorage from 'react-native-secured-storage';

const StorageManager = class {
    init = async (password) => {
        if (Project.mobile.useSecuredStorage) {
            global.SecuredStorage = SecuredStorage;
            await SecuredStorage.init(password);
        } else {
            console.warn('There is no need to initialise the StorageManager when using regular AsyncStorage.');
        }
    }

    get = async () => {
        if (Project.mobile.useSecuredStorage) return SecuredStorage.get();
        // no-op for regular AsyncStorage
    }

    clear = async () => {
        return Project.mobile.useSecuredStorage ? SecuredStorage.clear() : AsyncStorage.clear();
    }

    setItem = async (key, val, string) => {
        return Project.mobile.useSecuredStorage ? SecuredStorage.setItem(key, val, string) : AsyncStorage.setItem(key, string || JSON.stringify(val));
    }

    removeItem = async (key) => {
        return Project.mobile.useSecuredStorage ? SecuredStorage.removeItem(key) : AsyncStorage.removeItem(key);
    }

    getItem = async (key) => {
        return Project.mobile.useSecuredStorage ? SecuredStorage.storage[key] : AsyncStorage.getItem(key);
    }
};

module.exports = new StorageManager();
