import axiosClient from './axiosClient'
import {CAMPAIGN_API} from './urlConfig'

export const serviceApi = {
  getListCampaignService(id: number) {
    return axiosClient(CAMPAIGN_API, {params: {tabId: id}})
  },
}
