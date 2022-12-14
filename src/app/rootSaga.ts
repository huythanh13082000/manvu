import {all} from 'redux-saga/effects'
import userSaga from '../components/header/userSaga'
import homeSaga from '../pages/home/homeSaga'
import authSaga from '../pages/login/authSaga'
import campaignDetailSaga from '../pages/CampaignDetail/CampaignDetailSaga'
import serviceSaga from '../pages/Service/serviceSaga'
import myCampaignSaga from '../pages/MyCampaign/MyCampaignSaga'
export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    homeSaga(),
    serviceSaga(),
    campaignDetailSaga(),
    myCampaignSaga(),
  ])
}
