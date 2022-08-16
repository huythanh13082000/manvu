import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeEvery} from 'redux-saga/effects'
import {memberCampaignMineApi} from '../../apis/memberCampaignMineApi'
import {memberCampaignMineCountApi} from '../../apis/memberCampaignMineCountApi'
import {Campaign} from '../../models/campaign'
import {MemberCampaignMineCount, myCampaignActions} from './MyCampaignSlice'

function* getMemberCampaignMineCount() {
  try {
    const memberCampaignMineCount: MemberCampaignMineCount = yield call(
      memberCampaignMineCountApi.getMemberCampaignMineCount
    )
    yield put(
      myCampaignActions.getMemberCampaignMineCountSuccess(
        memberCampaignMineCount
      )
    )
  } catch (error) {
    console.log(error)
  }
}
function* getMemberCampaignMine(
  action: PayloadAction<{type: string; medias?: string}>
) {
  try {
    const memberCampaignMine: {list: Campaign[]} = yield call(
      memberCampaignMineApi.getMemberCampaignMine,
      action.payload
    )
    yield put(
      myCampaignActions.getMemberCampaignMineSuccess(memberCampaignMine)
    )
  } catch (error) {
    console.log(error)
  }
}

export default function* myCampaignSaga() {
  yield takeEvery(
    myCampaignActions.getMemberCampaignMineCount.type,
    getMemberCampaignMineCount
  )
  yield takeEvery(
    myCampaignActions.getMemberCampaignMine.type,
    getMemberCampaignMine
  )
}
