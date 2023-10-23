import { AxiosResponse } from "axios";
import Axios from "@/utils/axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getCurrentWeather = async (location: string) => {
  try {
    const res: AxiosResponse<Response> = await Axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`)
    return res.data
  }catch (e) {
    console.log('error')
  }
}