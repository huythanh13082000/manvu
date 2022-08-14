import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {Campaign} from '../../models/campaign'

interface CampaignDetail {
  loading: boolean
  campaign?: Campaign
}
const initialState: CampaignDetail = {
  loading: false,
  campaign: {
    view: 1,
    media: '',
    images: [],
  },
}

const campaignDetailSlice = createSlice({
  initialState,
  name: 'campaignDetail',
  reducers: {
    getCampaignDetail(state, action: PayloadAction<number>) {
      state.loading = true
    },
    getCampaignDetailSuccess(state, action: PayloadAction<Campaign>) {
      state.loading = false
      state.campaign = action.payload
    },
    getCampaignDetailFail(state) {
      state.loading = false
    },
  },
})

export const campaignDetailAction = campaignDetailSlice.actions

export const selectcampaignDetail = (state: RootState) =>
  state.campaignDetail.campaign

export const campaignDetailReducer = campaignDetailSlice.reducer
