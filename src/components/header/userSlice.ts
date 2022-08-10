import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import moment from 'moment'
import { RootState } from '../../app/store'
import {User} from '../../models/user'

const initialState: User = {
  id: '',
  name: '',
  addressList: [],
  avatar: '',
  avatars: [],
  bankAccount: {},
  companyAddress: '',
  companyBusinessType: '',
  companyLink: '',
  companyName: '',
  companyRegistrationNumber: '',
  companyStaffContact: '',
  companyTargetGender: '',
  companyYearFounded: '',
  createdAt: '',
  dateOfBirth: '',
  email: '',
  expiresAt: '',
  gender: 0,
  images: [],
  lastLoginAt: '',
  loginType: 0,
  phoneNumber: '',
  point: 0,
  roles: [],
  snsEmail: '',
  snsLinks: [],
  status: 0,
  token: '',
  topics: [],
  updatedAt: '',
  userId: '',
  username: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getProfile(state, action: PayloadAction<User>) {
      state = action.payload
    },
  },
})
//actions
export const userActions = userSlice.actions;
//selector
export const selectUser = (state:RootState)=>state.user
//reducer
const userReducer = userSlice.reducer
export default userReducer
