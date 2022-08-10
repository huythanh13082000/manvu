import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {User} from '../../models/user'

export interface LoginPayload {
  username: string
  password: string
}

export interface AuthState {
  isLoggedId: boolean
  logging?: boolean
  logginFail?: boolean
  currentUser?: User
}

const initialState: AuthState = {
  isLoggedId: false,
  logging: false,
  currentUser: undefined,
  logginFail: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      console.log(action)
      state.logging = true
    },
    loginSuccess(state, action: PayloadAction<User>) {
      console.log('success')
      state.logginFail = false
      state.logging = false
      state.isLoggedId = true
      state.currentUser = action.payload
    },
    loginFailed(state) {
      console.log(77777)
      state.logging = false
      state.logginFail = true
    },
    logout(state) {
      state.logginFail = false
      state.isLoggedId = false
      state.currentUser = undefined
    },
  },
})
//Actions
export const authActions = authSlice.actions
//Selectors

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedId
export const selectIsLogging = (state: RootState) => state.auth.logging
export const selectCurrentUser = (state: RootState) => state.auth.currentUser
export const selectloginFail = (state: RootState) => state.auth.logginFail

//Reducers

const authReducer = authSlice.reducer
export default authReducer
