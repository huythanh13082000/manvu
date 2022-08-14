import {Campaign} from '../models/campaign'
import axiosClient from './axiosClient'
import {CAMPAIGN_API} from './urlConfig'

export const campaignDetailApi = {
  getCampaignDetail(id: number): Promise<Campaign> {
    return axiosClient.get(`${CAMPAIGN_API}/${id}`)
  },
}
