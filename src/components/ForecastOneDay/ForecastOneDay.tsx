import React, {useContext} from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem"
import {SelectDate} from "../SelectDate/SelectDate";
import {SelectCity} from "../SelectCity/SelectCity";
import './ForecastOneDay.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";

export const ForecastOneDay: React.FunctionComponent = () => {
    const {loading, weathers, selectedCity, selectedDate} = useContext(WeatherForecastContext)
    const weatherOne = weathers[0]
    console.log(weathers, weatherOne)

    return (
        <div className='forecast-container'>
            <h2 className='forecast-container__h2'>Forecast for a Date in the Past</h2>
            <form action="#" className='form-box'>
                <SelectCity/>
                <SelectDate/>
            </form>
            {/*// @ts-ignore*/}
            {selectedCity && selectedDate
                ? <ForecastCardItem cardInfo={weatherOne} key={weatherOne.dt}/>
                : <div className='weather-card-blank'>
                    <p className='weather-card-blank__p'>Fill in all the fields and the weather will be displayed</p>
                </div>
            }
        </div>
    )
}