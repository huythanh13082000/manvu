import {Campaign} from '../models/campaign'
import {homeState} from '../pages/home/homeSlice'
import axiosClient from './axiosClient'
import {CAMPAIGN_API} from './urlConfig'

export const campaignApi = {
  getListCampaign(): Promise<Campaign> {
    return axiosClient.get(CAMPAIGN_API)
  },
}
