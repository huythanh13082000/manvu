import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeEvery} from 'redux-saga/effects'
import {serviceApi} from '../../apis/serviceApi'
import {tabApi} from '../../apis/tabApi'
import {Campaign} from '../../models/campaign'
import {serviceActions, ServiceState} from './serviceSlice'

function* getCategories(action: PayloadAction<number>) {
  const listCategories: ServiceState = yield call(
    tabApi.getListTab,
    action.payload
  )
  yield put(serviceActions.getCategoriesSuccess(listCategories))
}
function* getListCampaignService(action: PayloadAction<number>) {
  const listCampaignService: {list: Campaign[]} = yield call(
    serviceApi.getListCampaignService,
    action.payload
  )
  yield put(serviceActions.getListCampaignServiceSuccess(listCampaignService))
}

export default function* serviceSaga() {
  yield takeEvery(serviceActions.getCategories.type, getCategories)
  yield takeEvery(
    serviceActions.getListCampaignService.type,
    getListCampaignService
  )
}
