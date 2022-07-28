import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
const rootReducer = combineReducers({
  // router: connectRouter(history),
  counter: counterReducer,
  // auth: authReducer,
  // dashboard: dashboardReducer,
  // student: studentReducer,
  // city: cityReducer,
})
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
