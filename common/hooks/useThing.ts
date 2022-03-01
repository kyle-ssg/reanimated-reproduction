import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Res } from '../types/responses'
import { Req } from '../types/requests'
import { StoreStateType } from '../store'

type InitialStateType = Res['thing'] | null

const initialState = null as InitialStateType

export const thingSlice = createSlice({
  name: 'thing',
  initialState,
  reducers: {
    setThing(state, action: PayloadAction<Req['setThing']>) {
      state = action.payload
      return state
    },
  },
})

export const thingActions = thingSlice.actions
export const useThingActions = () => {
  const dispatch = useDispatch()
  const setThing = useCallback(
    (payload: Req['setThing']) => {
      return dispatch(thingActions.setThing(payload))
    },
    [dispatch],
  )
  return { setThing }
}

const selectThing = (state: StoreStateType) => state.thing

export const useThing = () => {
  const { setThing } = useThingActions()
  const thing = useSelector(selectThing)
  return useMemo(() => ({ setThing, thing }), [setThing, thing])
}
