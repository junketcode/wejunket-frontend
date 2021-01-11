import environment from "../environment/environment"
import Axios, {AxiosResponse} from "axios"

export class AuthService {
  static async login(credentials: ILoginCredentials): Promise<AxiosResponse<ILoginResponse>> {
    const URL = `${environment.JUNKET_API_BASE}/auth/login`
    return await Axios.post(URL, credentials)
  }

  static async signUp(data: ISignUpData) {
    const URL = `${environment.JUNKET_API_BASE}/auth/signup`
    return await Axios.post(URL, data).then(response => {
      return response;
    }).catch(error => {
      return error.response;
    })
  }

  static async signUpWithFacebook(id, accessToken, email, name) {
    const URL = `${environment.JUNKET_AUTH_BASE}/login/facebook`
    let data = {
      fb_id: id,
      fb_token: accessToken,
      email: email,
      name: name,
      role: 'client'
    }
    return await Axios.post(URL, data).then(response => {
      return response;
    }).catch(error => {
      return error.response;
    })
  }

  static async signUpWithGoogle(googleId, token, email, name) {
    const URL = `${environment.JUNKET_AUTH_BASE}/login/google`
    let data = {
      google_id: googleId,
      email: email,
      // token: token,
      name: name,
      google_token: token,
      role: 'client'
    }
    return await Axios.post(URL, data).then(response => {
      // console.log("/login/google")
      // console.log(response)
      return response;
    }).catch(error => {
      // console.log('error')
      // console.log(error)
      return error.response;
    })
  }
}

export interface ISignUpData extends ILoginCredentials {
  name: string
  email: string
  password: string
  password_confirmation: string
  role?: string
}

export interface ILoginCredentials {
  email: string
  password: string
}

export interface ISignUpResponse extends ILoginResponse {}

export interface ILoginResponse {
  user: IUser
  token: string
}

export interface IUser {
  id: number
  name: string
  first_name: string
  last_name: string
  email: string
  zipcode?: any
  fb_id?: any
  role: string
  avatar_url: string
  subscribe_override: boolean
  created_at: number
}
