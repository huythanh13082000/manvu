import {MemberCampaignMineCount} from '../pages/MyCampaign/MyCampaignSlice'
import axiosClient from './axiosClient'
import {MEMBER_CAMPAIGN_MINE_COUNT} from './urlConfig'

export const memberCampaignMineCountApi = {
  getMemberCampaignMineCount(): Promise<MemberCampaignMineCount> {
    return axiosClient.get(MEMBER_CAMPAIGN_MINE_COUNT)
  },
}
