// import SecuredStorage from 'react-native-secured-storage';
import MMKVStorage from 'react-native-mmkv-storage'
import { StorageType } from 'common/types/api-type'
import { getApi } from 'common/api/api'

const MMKV = new MMKVStorage.Loader().withEncryption().initialize()

type CallbackType = (err: any, data: any) => void

const StorageManager = class {
  init = async () => {
    return MMKV
  }

  clear = async () => {
    getApi().log('STORAGE', 'CLEAR')
    return MMKV.clearStore()
  }

  getItem = async (key: string, cb: CallbackType) => {
    await this.init()
    const str = MMKV.getString(key)
    cb && cb(null, str)
    return str
  }

  setItem = async (key: string, value) => {
    await this.init()
    getApi().log('STORAGE', 'SET STRING', key, value)
    return MMKV.setStringAsync(key, value)
  }

  removeItem = async (key: string) => {
    await this.init()
    getApi().log('STORAGE', 'REMOVE ITEM', key)
    MMKV.removeItem(key)
  }
}

export default new StorageManager() as StorageType
