import React from 'react'
import {FormSelect} from "./FormSelect"
import {WeatherCardList} from "./WeatherCardList"

export const ForecastSevenDays: React.FunctionComponent = () => {
    return (
        <div className='forecast-seven-days-container'>
            <h2>7 Days Forecast</h2>
            <FormSelect />
            <WeatherCardList />
        </div>
    )

}