export interface User {
  id: string
  name: string
  addressList: []
  avatar: string
  avatars: string[]
  bankAccount: {}
  companyAddress: string | null
  companyBusinessType: string | null
  companyLink: string | null
  companyName: string | null
  companyRegistrationNumber: string | null
  companyStaffContact: string | null
  companyTargetGender: string | null
  companyYearFounded: string | null
  createdAt: string
  dateOfBirth: string
  email: string
  expiresAt: string
  gender: 0 | 1
  images: []
  lastLoginAt: string
  loginType: number
  phoneNumber: string
  point: number
  roles: []
  snsEmail: string | null
  snsLinks: []
  status: number
  token: string
  topics: []
  updatedAt: string
  userId: string
  username: string
}
