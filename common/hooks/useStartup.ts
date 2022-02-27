import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Res } from '../types/responses'

type InitialStateType = Res['startup'] | null

const initialState = null as InitialStateType
const slice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    startup(state, action: PayloadAction<Res['startup']>) {
      state = action.payload
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (a: AnyAction) => a.type.includes('logout'),
      (state) => {
        state = initialState
        return state
      },
    )
  },
})
export const startupActions = slice.actions
export const useStartupActions = () => {
  const dispatch = useDispatch()
  const startup = useCallback(
    (payload: Res['startup']) => {
      return dispatch(slice.actions.startup(payload))
    },
    [dispatch],
  )
  return { startup }
}

export const useStartup = () => {
  const { startup } = useStartupActions()
  return useMemo(() => ({ startup }), [startup])
}

export default slice.reducer
