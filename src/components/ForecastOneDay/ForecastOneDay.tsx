import React from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem"
import {SelectDate} from "../SelectDate/SelectDate";
import {SelectCity} from "../SelectCity/SelectCity";
import './ForecastOneDay.css'

export const ForecastOneDay: React.FunctionComponent = () => {
    return <div className='forecast-container'>
        <h2 className='forecast-container__h2'>Forecast for a Date in the Past</h2>
        <form action="#" className='form-box'>
            <SelectCity />
            <SelectDate />
        </form>
        <ForecastCardItem/>
    </div>
}