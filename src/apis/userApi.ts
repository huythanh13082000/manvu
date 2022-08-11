import {User} from '../models/user'
import axiosClient from './axiosClient'
import {USER_API} from './urlConfig'

export const userApi = {
  getUser(): Promise<User> {
    return axiosClient.get(USER_API)
  },
}
