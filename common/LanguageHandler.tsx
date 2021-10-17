import useProfile from './providers/useProfile'
import { FunctionComponent, useEffect } from 'react'

Strings.setLanguage('en-GB')

const LanguageHandler: FunctionComponent<any> = ({ children }) => {
  const { profile } = useProfile()
  const locale = profile?.locale
  useEffect(() => {
    if (locale && locale !== Strings.getInterfaceLanguage()) {
      try {
        Strings.setLanguage(locale)
      } catch (e) {
        console.log(e)
      }
    }
  }, [locale])
  return children
}

export default LanguageHandler
