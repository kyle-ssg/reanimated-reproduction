import React, { FunctionComponent, useEffect } from 'react'
import { useAuth } from 'common/providers/useAuth'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import useProfile from 'common/providers/useProfile'

type ComponentType = {}
const subscribe = async (id) => {
  if (id && !Constants.E2E) {
    await API.push.init(
      (notification: FirebaseMessagingTypes.RemoteMessage) => {},
    )
    await API.push.subscribe(`${id}`)
  }
}
const LinkHandler: FunctionComponent<ComponentType> = ({}) => {
  const { user } = useAuth()
  const { getProfile } = useProfile()
  const id = user?.id
  useEffect(() => {
    if (id) {
      subscribe(id)
      getProfile({ id })
    }
  }, [id, getProfile])
  return <></>
}

export default LinkHandler
