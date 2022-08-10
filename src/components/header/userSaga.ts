import {call, put, takeEvery} from 'redux-saga/effects'
import {userApi} from '../../apis/userApi'
import {userActions, userState} from './userSlice'

function* getUser() {
  try {
    const userProfile: userState = yield call(userApi.getUser)
    yield put(userActions.getProfileSuccess(userProfile))
  } catch (error) {
    yield put(userActions.getProfileFail)
  }
}

export default function* userSaga() {
  yield takeEvery(userActions.getProfile.type, getUser)
}
