import {all} from 'redux-saga/effects'
import userSaga from '../components/header/userSaga'
import homeSaga from '../pages/home/homeSaga'
import authSaga from '../pages/login/authSaga'
import serviceSaga from '../pages/Service/serviceSaga'
export default function* rootSaga() {
  yield all([authSaga(), userSaga(), homeSaga(), serviceSaga()])
}
