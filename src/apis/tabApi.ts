import {Categories} from '../models/categories'
import axiosClient from './axiosClient'
import {HOME_OPTIONS_API} from './urlConfig'

export const tabApi = {
  getListTab(id: number): Promise<Categories> {
    return axiosClient.get(HOME_OPTIONS_API + id)
  },
}
