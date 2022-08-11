import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeLatest} from 'redux-saga/effects'
import {authApi} from '../../apis/authApi'
import {setTokenAxios} from '../../apis/axiosClient'
import {User} from '../../models/user'
import {authActions, LoginPayload} from './authSlice'

function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const User: User = yield call(authApi.post, {...action.payload})
    yield localStorage.setItem('token', User.token)
    const token = localStorage.getItem('token') || ''
    setTokenAxios(token)
    yield put(authActions.loginSuccess(User))
    // yield put(push('/admin/dashboard'));
  } catch (error) {
    yield put(authActions.loginFailed())
    console.log(error)
  }
}
// function* handleLogout() {
//   console.log('logout')
// }

// function* watchLoginFlow() {
//   while (true) {
//     const action: PayloadAction<LoginPayload> = yield take(
//       authActions.login.type
//     )
//     yield fork(handleLogin, action.payload)
//     yield take(authActions.logout.type)
//     yield fork(handleLogout)
//   }
// }

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin)
}
