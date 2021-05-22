import React from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem"
import {SelectedDate} from "../SelectDate/SelectDate";
import {SelectCity} from "../SelectCity/SelectCity";
import './ForecastOneDay.css'

export const ForecastOneDay: React.FunctionComponent = () => {
    return <div className='forecast-container'>
        <h2 className='forecast-container__h2'>Forecast for a Date in the Past</h2>
        <form action="#" className='form-box'>
            <SelectCity />
            <SelectedDate />
        </form>
        {/*<ForecastCardItem/>*/}
        <div className='weather-card-blank weather-card-blank-oneday'>
            <p className='weather-card-blank__p'>Fill in all the fields and the weather will be displayed</p>
        </div>
    </div>
}