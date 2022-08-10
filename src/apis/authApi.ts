import {ListResponse} from '../models/common'
import {User} from '../models/user'
import {LoginPayload} from '../pages/login/authSlice'
import axiosClient from './axiosClient'
import {signIn} from './urlConfig'

export const authApi = {
  post(data: LoginPayload): Promise<User> {
    const url = signIn
    return axiosClient.post(url, data)
  },
}
