export interface ILocation {
  address1: string
  address2?: any
  city: string
  state: string
  country: string
  zipcode: string
  latitude: number
  longitude: number
}

export interface ITour {
  id: number
  user_id: number
  title: string
  description: string
  pricing_type: string
  type: string
  stops_count: number
  location: ILocation
  facebook_url: string
  twitter_url: string
  instagram_url?: any
  video_url: string
  has_prize: boolean
  prize_details?: any
  prize_instructions?: any
  trophy_image?: any
  start_point?: any
  start_message?: any
  start_video_url: string
  start_image?: any
  end_point?: any
  end_message?: any
  end_video_url: string
  end_image?: any
  main_image: any
  images: string[]
  pin_image: string
  intro_audio: string
  background_audio: string
  length: number
  rating: number
  in_app_id?: any
  is_favorite: boolean
  created_at: string
  updated_at: string
  published_at: string
  prize_location?: IPrizeLocation
}

export interface ILinks {
  first: string
  last: string
  prev?: any
  next: string
}

export interface IMeta {
  current_page: number
  from: number
  last_page: number
  path: string
  per_page: number
  to: number
  total: number
}

export interface ITourListResponse {
  data: ITour[]
  links: ILinks
  meta: IMeta
}


export interface IPrizeLocation {
  address1?: any
  address2?: any
  city?: any
  state?: any
  country?: any
  zipcode?: any
  latitude?: any
  longitude?: any
}

export interface IStop {
  id: number
  tour_id: number
  order: number
  title: string
  description: string
  play_radius: number
  video_url: string
  location: ILocation
  main_image: string
  images: string[]
  intro_audio: string
  background_audio?: any
  is_multiple_choice: boolean
  pricing_type?: string
  question?: any
  question_answer?: any
  question_success?: any
  next_stop?: any
  choices: any[]
  routes: any[]
  created_at: string
  updated_at: string
}

export interface IRoute {
  order: number
  latitude: number
  longitude: number
}

export interface ITourDataResponse {
  tour: ITour
  stops: IStop[]
  route: IRoute[]
  latest_reviews: any[]
}
