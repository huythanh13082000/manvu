import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeEvery} from 'redux-saga/effects'
import {campaignDetailApi} from '../../apis/campaignDetailApi'
import {Campaign} from '../../models/campaign'
import {campaignDetailAction} from './CampaignDetailSlice'

function* getCampaignDetail(action: PayloadAction<number>) {
  console.log(123, action.payload)
  const campaignDetail: Campaign = yield call(
    campaignDetailApi.getCampaignDetail,
    action.payload
  )
  console.log('detail', campaignDetail)
  yield put(campaignDetailAction.getCampaignDetailSuccess(campaignDetail))
}

export default function* campaignDetailSaga() {
  yield takeEvery(
    campaignDetailAction.getCampaignDetail.type,
    getCampaignDetail
  )
}
