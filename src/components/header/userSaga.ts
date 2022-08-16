import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {userApi} from '../../apis/userApi'
import {User} from '../../models/user'
import {userActions} from './userSlice'

function* getUser() {
  try {
    const userProfile: {profile: User} = yield call(userApi.getUser)
    yield put(userActions.getProfileSuccess(userProfile))
  } catch (error) {
    yield put(userActions.getProfileFail())
  }
}

export default function* userSaga() {
  yield takeLatest(userActions.getProfile.type, getUser)
}
