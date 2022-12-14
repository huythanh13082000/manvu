import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import userReducer from '../components/header/userSlice'
import {homeReducer} from '../pages/home/homeSlice'
import authReducer from '../pages/login/authSlice'
import {campaignDetailReducer} from '../pages/CampaignDetail/CampaignDetailSlice'
import {serviceReducer} from '../pages/Service/serviceSlice'
import rootSaga from './rootSaga'
import {myCampaignReducer} from '../pages/MyCampaign/MyCampaignSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  home: homeReducer,
  service: serviceReducer,
  campaignDetail: campaignDetailReducer,
  myCampaign: myCampaignReducer,
  // router: connectRouter(history),
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
