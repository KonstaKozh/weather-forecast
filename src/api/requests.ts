import {API_SEVEN_DAYS_URL, API_ONE_DAY_URL, API_KEY} from "./consts"
import {Coordinates} from "../types"

export const fetchSevenDaysForecast = async (coordinates: Coordinates): Promise<any>  => {
    try {
        const {lat, lon} = coordinates
        const url = `${API_SEVEN_DAYS_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        const result = await fetch(url)
        const forecast = await result.json()
        forecast.daily.length = 7;
        return forecast.daily
    } catch (e) {
        throw new Error(e.message)
    }
}

export const fetchOneDayForecast = async (coordinates: Coordinates, date: string): Promise<any> => {
    try {
        const url = `${API_ONE_DAY_URL}?lat=${coordinates.lat}&lon=${coordinates.lon}&dt=${date}&appid=${API_KEY}`
        const result = await fetch(url)
        const forecast = await result.json()
        return forecast.current
    } catch (e) {
        throw new Error(e.message)
    }
}