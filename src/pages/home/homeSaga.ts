import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeEvery} from 'redux-saga/effects'
import {campaignApi} from '../../apis/campaignApi'
import {ListParams} from '../../models/common'
import {homeActions, homeState} from './homeSlice'

function* getListCampaign(action: PayloadAction<ListParams>) {
  const listCampaign: homeState = yield call(
    campaignApi.getListCampaign,
    action.payload
  )
  yield put(homeActions.getListCampaignSuccess(listCampaign))
  console.log(2211221, listCampaign)
}

export default function* homeSaga() {
  yield takeEvery(homeActions.getListCampaign.type, getListCampaign)
}
