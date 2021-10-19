// import SecuredStorage from 'react-native-secured-storage';
import MMKVStorage from 'react-native-mmkv-storage'
import { Storage } from 'common/api-type'

const MMKV = new MMKVStorage.Loader().withEncryption().initialize()

type CallbackType = (err: any, data: any) => void

const StorageManager = class {
  init = async () => {
    return MMKV
  }

  clear = async () => {
    API.log('STORAGE', 'CLEAR')
    await MMKV.clearStore()
  }

  getItem = async (key, cb: CallbackType) => {
    await this.init()
    const str = MMKV.getString(key)
    cb && cb(null, str)
    return str
  }

  setItem = async (key, value) => {
    await this.init()
    API.log('STORAGE', 'SET STRING', key, value)
    return MMKV.setStringAsync(key, value)
  }

  removeItem = async (key) => {
    await this.init()
    API.log('STORAGE', 'REMOVE ITEM', key)
    MMKV.removeItem(key)
  }
}

export default new StorageManager() as Storage
