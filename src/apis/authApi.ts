import {User} from '../models/user'
import {LoginPayload} from '../pages/login/authSlice'
import axiosClient from './axiosClient'
import {SINGIN_API} from './urlConfig'

export const authApi = {
  post(data: LoginPayload): Promise<User> {
    return axiosClient.post(SINGIN_API, data)
  },
}
