import { FunctionComponent } from 'react'
import { Constants } from '../utils'
import { getStrings } from '../strings'

const LanguageHandler: FunctionComponent<any> = ({
  children,
  defaultLocale,
}) => {
  const forceLanguage = Constants.simulate.FORCE_LANGUAGE || defaultLocale
  if (getStrings().getLanguage() !== forceLanguage) {
    getStrings().setLanguage(forceLanguage)
  }
  return children
}

export default LanguageHandler
