import { useUser } from './useUser'
import { useEffect } from 'react'
import { API } from '../../project/api'

export default function () {
  const { user } = useUser()
  useEffect(() => {
    if (user) {
      API.loginRedirect()
    }
  }, [user])
}
