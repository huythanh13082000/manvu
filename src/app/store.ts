import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import cardReducer from '../features/renderCard/renderCardSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
const rootReducer = combineReducers({
  // router: connectRouter(history),
  card: cardReducer,
  // auth: authReducer,
  // dashboard: dashboardReducer,
  // student: studentReducer,
  // city: cityReducer,
})
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
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
