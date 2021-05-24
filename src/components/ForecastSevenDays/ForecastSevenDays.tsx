import React from 'react'
import {ForecastCardList} from "../ForecastCardList/ForecastCardList"
import './ForecastSevenDays.css'
import {SelectCityContainer} from "../SelectCity/SelectCityContainer"

export const ForecastSevenDays: React.FunctionComponent = () => {

    return (
        <div className='forecast-container'>
            <h2 className='forecast-container__h2'>7 Days Forecast</h2>
            <form action="#" className='form-box'>
                <SelectCityContainer/>
            </form>
            <ForecastCardList />
        </div>
    )
}