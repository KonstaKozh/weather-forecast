import React, {useContext, useEffect} from "react"
import img from '../../img/light-rain-icon.svg'
import './ForecastCardItem.css'
import {icons} from '../../icons.json'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";
import {convertKelvinToCelsius, formatDate} from "../../utils";

export const ForecastCardItem: any = ({cardInfo}:any) => {
    const date = formatDate(cardInfo.dt)
    const icon = cardInfo.weather[0].icon
    const temp = convertKelvinToCelsius(cardInfo.temp.day)


    return (
        <div className='weather-card-item'>
            <time className='time'>{date}</time>
            {/* @ts-ignore */}
            <img className='weather-icon' src={icons[icon].url} alt={icons[icon].alt}/>
            <p className='temperature'>{`${temp}`}&deg;</p>
        </div>
    )
}
