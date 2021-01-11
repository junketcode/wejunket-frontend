import environment from "../environment/environment"
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import {
  ITourDataResponse,
  ITourListResponse,
} from "../interfaces/tour-data.interface"
import { SessionStorageService } from "./sessionStorage.service"
import { ILoginResponse } from "./auth.service"
import * as turf from "@turf/turf"
import { search } from "*.jpg"

export class ToursService {
  static async getTourList(
    params?: any
  ): Promise<AxiosResponse<ITourListResponse>> {
    const { searchKey, pageURL } = params
    const baseURL = pageURL ? pageURL : environment.JUNKETS_API_URL
    const URL = !searchKey ? baseURL : (
      pageURL ? `${baseURL}&search=${searchKey}`
              : `${baseURL}?search=${searchKey}`
    )
    // Mocking this for the Time Being
    // return Promise.resolve({data: tourListFirstPageMock} as any);
    const user: ILoginResponse = JSON.parse(SessionStorageService.get("user"))
    const options: AxiosRequestConfig = {
      headers: { "X-Authorization": `${environment.PUBLIC_API_KEY}` },
    }
    return await Axios.get(URL, options)
  }

  static async getFreeJunkets(): Promise<AxiosResponse<ITourListResponse>> {
    const URL = `${environment.JUNKET_API_BASE}/tours/free`
    const options: AxiosRequestConfig = {
      headers: { "X-Authorization": `${environment.PUBLIC_API_KEY}` },
    }
    return await Axios.get(URL, options)
  }

  static async getJunketsNearby(): Promise<AxiosResponse<ITourListResponse>> {
    const latitude = "37.2707"
    const longitude = "76.7075"
    const URL = `${environment.JUNKET_API_BASE}/tours?nearby=%2225.811481872869393%2C-80.13444900512695%22`
    const user: ILoginResponse = JSON.parse(SessionStorageService.get("user"))
    const options: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    const res = await Axios.get(URL, options)
    console.log(res)
    return res
  }

  static async getNextOrPastPage(
    nextOrPastPageUrl: string
  ): Promise<AxiosResponse<ITourListResponse>> {
    return await Axios.get(nextOrPastPageUrl)
  }

  static async getTourData(
    tourId: number
  ): Promise<AxiosResponse<ITourDataResponse>> {
    const URL = `${environment.JUNKET_API_BASE}/tours/${tourId}`
    const user: ILoginResponse = JSON.parse(SessionStorageService.get("user"))
    const options: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    return await Axios.get(URL, options)
  }

  static async getSharableTourData(
    tourId: number
  ): Promise<AxiosResponse<ITourDataResponse>> {
    const URL = `${environment.JUNKET_API_BASE}/tours/sharable/${tourId}`
    const options: AxiosRequestConfig = {
      headers: { "X-Authorization": `${environment.JUNKET_API_KEY}` },
    }
    return await Axios.get(URL, options)
  }

  static getZoomLevel(stops: any) {
    let stopArray = [[]]

    stops.map(stop => {
      stopArray[0].push([stop.location.longitude, stop.location.latitude])
    })

    stopArray[0].push(stopArray[0][0])


    let polygon = turf.polygon(stopArray)
    let area = turf.area(polygon)

    if (area >= 591657550.5) {
      return 1
    } else if (area >= 295828775.3) {
      return 2
    } else if (area >= 147914387.6) {
      return 3
    } else if (area >= 73957193.82) {
      return 4
    } else if (area >= 36978596.91) {
      return 5
    } else if (area >= 18489298.45) {
      return 6
    } else if (area >= 9244649.227) {
      return 7
    } else if (area >= 4622324.614) {
      return 8
    } else if (area >= 2311162.307) {
      return 9
    } else if (area >= 1155581.153) {
      return 10
    } else if (area >= 577790.576700) {
      return 11
    } else if (area >= 288895.288400) {
      return 12
    } else if (area >= 144447.644200) {
      return 13
    } else if (area >= 72223.822090) {
      return 14
    } else if (area >= 36111.911040) {
      return 15
    } else if (area >= 18055.955520) {
      return 16
    } else if (area >= 9027.977761) {
      return 17
    } else if (area >= 4513.988880) {
      return 18
    } else if (area >= 2256.994440) {
      return 19
    } else {
      return 20
    }
  }
}
