import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Res } from '../types/responses'
import { StoreStateType } from '../store'
import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseApiOptions } from '../utils/serviceUtils'
import { Req } from '../types/requests'
type UserState = Res['user'] | null

const initialState = null as UserState
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state = initialState
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userService.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<Res['user']>) => {
        state = action.payload
      },
    )
  },
})

const selectUser = (state: StoreStateType) => state.user

export const userService = createApi({
  ...baseApiOptions,
  tagTypes: [],
  endpoints: (builder) => ({
    login: builder.mutation<Res['user'], Req['login']>({
      query: (query: Req['login']) => ({
        url: `login`,
        method: 'POST',
        body: query,
      }),
    }),
    // END OF ENDPOINTS
  }),
})

export const {
  useLoginMutation,
  // END OF EXPORTS
} = userService

export const useUserActions = () => {
  const dispatch = useDispatch()
  const logout = useCallback(() => {
    return dispatch(slice.actions.logout())
  }, [dispatch])
  return { logout }
}

export const useUser = () => {
  const { logout } = useUserActions()
  const [
    login,
    { isLoading: userLoading, error: userError, isSuccess: loginSuccess },
  ] = useLoginMutation()
  const user = useSelector(selectUser)
  return useMemo(
    () => ({ user, logout, userLoading, userError, login, loginSuccess }),
    [user, logout, userLoading, userError, login, loginSuccess],
  )
}

export default slice.reducer
