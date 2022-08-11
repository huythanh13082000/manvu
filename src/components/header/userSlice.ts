import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {User} from '../../models/user'

export interface userState {
  loading?: boolean
  profile?: User | undefined
}

const initialState: userState = {
  profile: {
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
  },
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getProfile(state) {
      state.loading = true
    },
    getProfileSuccess(state, action: PayloadAction<{profile: User}>) {
      console.log(777777, action.payload)
      state.profile = action.payload.profile
      state.loading = false
      console.log(77999, state)
    },
    getProfileFail(state) {
      console.log(22112321)
      state.loading = false
      state.profile = undefined
    },
  },
})
//actions
export const userActions = userSlice.actions
//selector
export const selectUser = (state: RootState) => state.user
//reducer
const userReducer = userSlice.reducer
export default userReducer
