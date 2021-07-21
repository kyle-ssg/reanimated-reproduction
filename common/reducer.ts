import './utils'
import { Actions } from './app-actions'
import produce, { enableES5 } from 'immer'
enableES5() // required for react native hermes

// eslint-disable-next-line no-unused-vars
import {
  appendItem,
  deleteItem,
  itemError,
  itemLoaded,
  itemLoading,
  itemSaved,
  itemSaving,
} from './utils/reducer-helpers'
import { AppState, RequestTypes } from './state-type'

// Adds infinite scroll
const adjustInfinite = (action, state) => {
  if (
    action.originalAction.data.infinite &&
    action.originalAction.data.page > 1 &&
    state?.[action.originalAction.data.organisationId].content
  ) {
    action.data = {
      ...action.data,
      content: state?.[
        action.originalAction.data.organisationId
      ].content.concat(action.data.content),
    }
  }
}
const defaultReducer = produce((state: AppState, action): AppState | void => {
  if (typeof window === 'undefined') {
    API.log('SERVER', action.type, action.data)
    if (action.type.includes('ERROR')) {
      API.log('SERVER', action)
    }
  } else {
    API.log('DISPATCHER', action.type)
  }
  switch (action.type) {
    case Actions.LOGIN_LOADED:
    case Actions.UPDATE_USER_LOADED:
    case Actions.CONFIRM_EMAIL_LOADED:
    case Actions.REGISTER_LOADED:
      itemLoaded(state, 'profile', action)
      break
    case Actions.LOGIN_ERROR:
    case Actions.CONFIRM_EMAIL_ERROR:
    case Actions.REGISTER_ERROR:
    case Actions.UPDATE_USER_ERROR:
      itemError(state, 'profile', action)
      break
    case Actions.REGISTER:
    case Actions.UPDATE_USER:
    case Actions.CONFIRM_EMAIL:
    case Actions.LOGIN:
      itemLoading(state, 'profile')
      break
    case Actions.CLEAR_USER:
      if (state.profile.id) {
        API.push?.unsubscribe(`${state.profile.id}`)
      }
      state.profile = null
      break
    case Actions.STARTUP_LOADED:
      Object.keys(action.data).map((k) => {
        state[k] = action.data[k]
      })
      break
    case Actions.SET_ACTIVE_SCREEN:
      itemLoaded(state, 'activeScreen', action, true)
      break
    // END OF REDUCER
    // KEEP THE ABOVE LINE IN, IT IS USED BY OUR CLI
    default:
      break
  }
})

export default defaultReducer
