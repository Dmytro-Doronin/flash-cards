import { combineReducers, configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/order
import { setupListeners } from '@reduxjs/toolkit/query'

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { baseApi } from '../services/base.service.ts'
import { appReducer } from '../state/appReducer/appReducer.ts'
// eslint-disable-next-line import/namespace
import { decksReducer } from '../state/decksReducer/decksReducer.ts'

const rootReducer = combineReducers({
  decks: decksReducer,
  app: appReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(baseApi.middleware)
  },
})

setupListeners(store.dispatch)
// export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppRootStateType,
//   unknown,
//   AnyAction
// >
//
//export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
