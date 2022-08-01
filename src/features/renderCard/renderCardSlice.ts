import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {Card} from '../../models/card'
export interface CardState {
  list: Card[]
  loadding: boolean
}
const initialState: CardState = {
  list: [],
  loadding: false,
}
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getCardList(state) {
      state.loadding = true
    },
  },
})
//action
export const cardAction = cardSlice.actions

// Selectors
export const selectCardList = (state: RootState) => state.card.list
const cardReducer = cardSlice.reducer
export default cardReducer
