import {all} from 'redux-saga/effects'
import cardSaga from '../features/renderCard/renderCardSaga'
export default function* rootSaga() {
  yield all([cardSaga()])
}
