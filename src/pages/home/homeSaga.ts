import {call, put, takeEvery} from 'redux-saga/effects'
import {campaignApi} from '../../apis/campaignApi'
import {homeActions, homeState} from './homeSlice'

function* getListCampaign() {
  const listCampaign: homeState = yield call(campaignApi.getListCampaign)
  yield put(homeActions.getListCampaignSuccess(listCampaign))
  console.log(2211221, listCampaign)
}

export default function* homeSaga() {
  yield takeEvery(homeActions.getListCampaign.type, getListCampaign)
}
