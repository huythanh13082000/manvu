import {Campaign} from '../models/campaign'
import {ListParams} from '../models/common'
import axiosClient from './axiosClient'
import {CAMPAIGN_API} from './urlConfig'

export const campaignApi = {
  getListCampaign(params: ListParams): Promise<Campaign> {
    return axiosClient.get(CAMPAIGN_API, {params})
  },
}
