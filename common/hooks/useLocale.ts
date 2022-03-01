import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Res } from '../types/responses'
import { StoreStateType } from '../store'

type InitialStateType = Res['setLocale'] | null

const initialState = null as InitialStateType

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Res['setLocale']>) {
      state = action.payload
    },
  },
})

export const localeActions = localeSlice.actions
export const useLocaleActions = () => {
  const dispatch = useDispatch()
  const setLocale = useCallback(
    (payload: Res['setLocale']) => {
      return dispatch(localeSlice.actions.setLocale(payload))
    },
    [dispatch],
  )
  return { setLocale }
}

const selectLocale = (state: StoreStateType) => state.locale

export const useLocale = () => {
  const { setLocale } = useLocaleActions()
  const locale = useSelector(selectLocale)
  return useMemo(() => ({ setLocale, locale }), [setLocale, locale])
}
