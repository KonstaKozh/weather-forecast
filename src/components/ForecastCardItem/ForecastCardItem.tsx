import React from "react"
import img from '../../img/light-rain-icon.svg'
import './ForecastCardItem.css'

export const ForecastCardItem: React.FunctionComponent = () => {
    return (
        <div className='weather-card-item'>
            <time className='time'>27 sep 2021</time>
            <img className='weather-icon' src={img} alt="light-rain"/>
            <p className='temperature'>+17&deg;</p>
        </div>
    )
}
