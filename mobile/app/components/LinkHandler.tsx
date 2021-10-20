import React, { FunctionComponent, useEffect } from 'react'
import { useAuth } from 'common/providers/useAuth'
import useProfile from 'common/providers/useProfile'
import { useAppState } from '@react-native-community/hooks'
import { rootPush } from 'navigation/RootNavigation'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

type ComponentType = {}
const subscribe = async (id) => {
  if (id && !Constants.E2E) {
    setTimeout(async () => {
      await API.push.init(
        (notification: FirebaseMessagingTypes.RemoteMessage, foreground) => {
          if (foreground) {
            return
          }
          const { route, ...rest } = notification.data
          const routeKey = notification.data.id // get possible route keys here to prevent pushing a duplicate route
          if (route) {
            rootPush(route, { ...rest }, routeKey)
          }
        },
      )

      await API.push.subscribe(`${id}`)
    }, 2000)
  }
}
const LinkHandler: FunctionComponent<ComponentType> = ({}) => {
  const { user } = useAuth()
  const { getProfile, profile } = useProfile()
  const id = user?.id
  const currentAppState = useAppState()

  useEffect(() => {
    // if (currentAppState === 'active') {
    // }
  }, [currentAppState])

  useEffect(() => {
    if (id && currentAppState === 'active') {
      subscribe(id)
      getProfile({ id })
    }
  }, [id, getProfile, currentAppState])

  return <></>
}

export default LinkHandler
