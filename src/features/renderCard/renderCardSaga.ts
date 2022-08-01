import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import cardApi from '../../apis/cardApi'
import {Card} from '../../models/card'
import {ListResponse} from '../../models/common'
import {cardAction} from './renderCardSlice'
function* getListCart() {
  const listCard: ListResponse<Card> = yield call(cardApi.getAll)
  console.log(listCard.data)
}
export default function* cardSaga() {
  yield takeEvery(cardAction.getCardList.type, getListCart)
}
