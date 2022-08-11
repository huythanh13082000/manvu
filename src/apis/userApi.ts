import {User} from '../models/user'
import axiosClient from './axiosClient'
import {USER_API} from './urlConfig'

export const userApi = {
  getUser(): Promise<User> {
    const token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    }
    return axiosClient.get(USER_API, {
      headers: headers,
    })
  },
}
