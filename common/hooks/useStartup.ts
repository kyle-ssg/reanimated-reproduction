import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Res } from '../types/responses'

type InitialStateType = Res['startup'] | null

const initialState = null as InitialStateType

export const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    startup(state, action: PayloadAction<Res['startup']>) {
      return state
    },
  },
})

export const startupActions = startupSlice.actions
export const useStartupActions = () => {
  const dispatch = useDispatch()
  const startup = useCallback(
    (payload: Res['startup']) => {
      return dispatch(startupSlice.actions.startup(payload))
    },
    [dispatch],
  )
  return { startup }
}

export const useStartup = () => {
  const { startup } = useStartupActions()
  return useMemo(() => ({ startup }), [startup])
}
