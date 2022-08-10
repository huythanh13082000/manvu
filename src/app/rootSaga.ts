import {all} from 'redux-saga/effects'
import userSaga from '../components/header/userSaga'
import authSaga from '../pages/login/authSaga'
export default function* rootSaga() {
  yield all([authSaga(), userSaga()])
}
