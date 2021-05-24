import React, {useContext, useEffect} from "react"
import {ForecastCardItemOne} from "../ForecastCardItem/ForecastCardItemOne"
import {SelectDate} from "../SelectDate/SelectDate"
import './ForecastOneDay.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext"
import {SelectCityOneContainer} from "../SelectCity/SelectCityOneContainer"
import {getCityByIndex, formatDateToUnix} from "../../utils"

export const ForecastOneDay: React.FunctionComponent = () => {

    const {loading, weather, selectedCityOneIndex, selectedDate, getOneDayForecast} = useContext(WeatherForecastContext)

    useEffect(() => {
        if ((selectedCityOneIndex >= 0) && selectedDate) {
            const selectedCity = getCityByIndex(selectedCityOneIndex)
            const formattedDate = formatDateToUnix(selectedDate)
            getOneDayForecast(selectedCity.coordinates, formattedDate)
        }
    },[selectedCityOneIndex, selectedDate])

    return (
        <div className='forecast-container'>
            <h2 className='forecast-container__h2'>Forecast for a Date in the Past</h2>
            <form action="#" className='form-box'>
                <SelectCityOneContainer/>
                <SelectDate/>
            </form>
            {/*// @ts-ignore*/}
            {weather
                ? <ForecastCardItemOne cardInfo={weather}/>
                : <div className='weather-card-blank'>
                    <p className='weather-card-blank__p'>Fill in all the fields and the weather will be displayed</p>
                </div>
            }
        </div>
    )
}