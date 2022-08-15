import {User} from '../models/user'
import {LoginPayload} from '../pages/login/authSlice'
import axiosClient from './axiosClient'
import {SIGNIN_API, SIGNUP_MEMBER_API} from './urlConfig'

export const authApi = {
  post(data: LoginPayload): Promise<User> {
    return axiosClient.post(SIGNIN_API, data)
  },
  signUpMember(data: any) {
    return axiosClient.post(SIGNUP_MEMBER_API, data)
  },
}
