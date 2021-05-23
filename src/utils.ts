import {cities} from './cityData.json'
import {CityType} from './types'

export const convertKelvinToCelsius = (temp: number) => Math.round(temp - 273)

export const formatDate = (date: number) => {
    const dateInstance = new Date(date * 1000)
    return dateInstance.toISOString().substr(0,10)
}

export const getCityByIndex = (index: number): CityType => cities[index];

export const formatDateToUnix = (date: string): string => {
    const dateObject = new Date(date)
    return (dateObject.getTime() / 1000).toString()
}