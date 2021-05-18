import React from 'react'
import {ForecastCardList} from "../ForecastCardList/ForecastCardList"
import {SelectCity} from "../SelectCity/SelectCity"
import './ForecastSevenDays.css'

export const ForecastSevenDays: React.FunctionComponent = () => {
    return (
        <div className='forecast-container'>
            <h2 className='forecast-container__h2'>7 Days Forecast</h2>
            <form action="#" className='form-box'>
                <SelectCity />
            </form>
            <ForecastCardList />
        </div>
    )
}