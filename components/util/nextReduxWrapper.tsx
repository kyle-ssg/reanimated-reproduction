import { createWrapper } from 'next-redux-wrapper'
import { store, StoreStateType } from 'common/store'
import { Store } from 'redux'
import { Project } from 'common/project'

export const nextReduxWrapper = createWrapper<Store<StoreStateType>>(store, {
  debug: Project.logs.DISPATCHER,
})
