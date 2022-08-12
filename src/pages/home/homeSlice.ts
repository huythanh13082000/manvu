// const initialState:

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {Campaign} from '../../models/campaign'

export interface homeState {
  list: Array<Campaign>
  loading?: boolean
}
const initialState: homeState = {
  list: [],
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getListCampaign(state) {
      state.loading = true
    },
    getListCampaignSuccess(state, action: PayloadAction<homeState>) {
      state.list = action.payload.list
      state.loading = false
    },
    getListCampaignFail(state, action: PayloadAction<homeState>) {
      state.loading = false
    },
  },
})

export const homeActions = homeSlice.actions

export const selectListCampaign = (state: RootState) => state.home

export const homeReducer = homeSlice.reducer
