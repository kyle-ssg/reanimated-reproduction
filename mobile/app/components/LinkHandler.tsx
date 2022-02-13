import { FC, useEffect } from 'react'
import { useAuth } from 'common/providers/useAuth'
import { useAppState } from '@react-native-community/hooks'
import { rootPush } from 'navigation/RootNavigation'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import { API } from 'project/api/api'
import { Constants } from 'common/utils'

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
const LinkHandler: FC<ComponentType> = ({}) => {
  const { user, getUser } = useAuth()
  const id = user?.id
  const currentAppState = useAppState()

  useEffect(() => {
    // if (currentAppState === 'active') {
    // }
  }, [currentAppState])

  useEffect(() => {
    if (id && currentAppState === 'active') {
      subscribe(id)
      getUser({ id })
    }
  }, [id, getUser, currentAppState])

  return <></>
}

export default LinkHandler
