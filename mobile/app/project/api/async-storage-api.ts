// import SecuredStorage from 'react-native-secured-storage';
import MMKVStorage from 'react-native-mmkv-storage'
let MMKV
const StorageManager = class {
  init = async () => {
    if (MMKV) {
      return MMKV
    }
    API.log('STORAGE', 'INIT')
    MMKV = new MMKVStorage.Loader()
      // uncommenting this breaks the app
      // .withEncryption()
      .initialize()

    API.log('STORAGE', 'INIT DONE')
    return MMKV
  }

  clear = async () => {
    API.log('STORAGE', 'CLEAR')
    return MMKV.clearStore()
  }

  getItem = async (key) => {
    await this.init()
    API.log('STORAGE', 'GET STRING', key)
    return MMKV.getStringAsync(key).catch((e) => {
      if (e === 'Value for key does not exist') return null
      return Promise.reject(e)
    })
  }

  setItem = async (key, value) => {
    await this.init()
    API.log('STORAGE', 'SET STRING', key, value)
    return MMKV.setStringAsync(key, value)
  }

  removeItem = async (key) => {
    await this.init()
    API.log('STORAGE', 'REMOVE ITEM', key)
    await MMKV.removeItem(key)
  }
}

export default new StorageManager()
