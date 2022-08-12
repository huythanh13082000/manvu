import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {Campaign} from '../../models/campaign'
import {Categories} from '../../models/categories'

export interface ServiceState {
  categories: Categories[]
  loading: boolean
  listCampaignService: Campaign[]
}

const initialState: ServiceState = {
  categories: [],
  loading: false,
  listCampaignService: [],
}

export const serviceSlice = createSlice({
  name: 'serviceSlice',
  initialState,
  reducers: {
    getCategories(state, action: PayloadAction<number>) {
      state.loading = true
    },
    getCategoriesSuccess(state, action: PayloadAction<ServiceState>) {
      state.categories = action.payload.categories
      state.loading = false
    },
    getCategoriesFail(state) {
      state.loading = false
    },
    getListCampaignService(state, action: PayloadAction<number>) {
      state.loading = true
    },
    getListCampaignServiceSuccess(
      state,
      action: PayloadAction<{list: Campaign[]}>
    ) {
      console.log(123, action.payload.list)
      state.loading = false
      state.listCampaignService = action.payload.list
    },
    getListCampaignServiceFail(state) {
      state.loading = false
    },
  },
})
export const serviceActions = serviceSlice.actions

export const selectCategories = (state: RootState) => state.service.categories
export const selectListCampaignService = (state: RootState) =>
  state.service.listCampaignService

export const serviceReducer = serviceSlice.reducer
