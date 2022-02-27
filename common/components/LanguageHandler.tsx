import { useUser } from '../hooks/useUser'
import { FunctionComponent, useEffect } from 'react'
import { Constants } from '../utils'
import { getStrings } from '../strings'

const LanguageHandler: FunctionComponent<any> = ({ children }) => {
  const { user } = useUser()
  const locale = user?.locale
  const forceLanguage = Constants.simulate.FORCE_LANGUAGE
  useEffect(() => {
    if (forceLanguage) {
      getStrings().setLanguage(forceLanguage)
      return
    }
    if (locale && locale !== getStrings().getInterfaceLanguage()) {
      try {
        getStrings().setLanguage(locale)
      } catch (e) {}
    }
  }, [locale, forceLanguage])
  return children
}

export default LanguageHandler
