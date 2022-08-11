export interface Campaign {
  tags?: number[]
  images?: string[]
  applications?: {}
  areaIds?: []
  id?: number
  userId?: string
  name?: string
  shortDescription?: string
  offers?: string
  content?: string
  keywords?: string
  mission?: string
  notes?: string
  media?: string
  campaignRegistrationDateFrom?: string
  campaignRegistrationDateTo?: string
  announcementToMemberDate?: string
  contentRegistrationDateFrom?: string
  contentRegistrationDateTo?: string
  announcementFinalDate?: string
  numberOfRecruit?: number
  point?: number
  status?: number
  completeAt?: string | null
  tabId?: number
  view?: number
  isAddress?: boolean
  adddress?: string | null
  latitude?: number
  longitude?: number
  position?: {}
  createdAt?: string
  updatedAt?: string
  user?: {}
  members?: {}
  interactive?: {}
  categories?: []
  joinRequest?: null
}
