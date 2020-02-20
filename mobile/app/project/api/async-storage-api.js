const StorageManager = class {
    init = async (password) => {
        if (Project.mobile.useSecuredStorage) {
            const es6module = await import('react-native-secured-storage');
            global.SecuredStorage = es6module.default;
            await SecuredStorage.init(password);
        } else {
            console.warn('There is no need to initialise the StorageManager when using regular AsyncStorage.')
        }
    }
    get = async () => {
        if (Project.mobile.useSecuredStorage) return await SecuredStorage.get();
        // no-op for regular AsyncStorage
    }
    clear = async () => {
        return Project.mobile.useSecuredStorage ? await SecuredStorage.clear() : await AsyncStorage.clear();
    }
    setItem = async (key, val, string) => {
        return Project.mobile.useSecuredStorage ? await SecuredStorage.setItem(key, val, string) : await AsyncStorage.setItem(key, string || JSON.stringify(val));
    }
    removeItem = async (key) => {
        return Project.mobile.useSecuredStorage ? await SecuredStorage.removeItem(key) : await AsyncStorage.removeItem(key);
    }
    getItem = async (key) => {
        return Project.mobile.useSecuredStorage ? SecuredStorage.storage[key] : await AsyncStorage.getItem(key);
    }
}

module.exports = new StorageManager();
