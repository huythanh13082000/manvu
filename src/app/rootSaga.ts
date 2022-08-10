import {all} from 'redux-saga/effects'
import authSaga from '../pages/login/authSaga'
export default function* rootSaga() {
  yield all([authSaga()])
}
