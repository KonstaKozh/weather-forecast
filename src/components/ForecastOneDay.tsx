import React from "react"
import {FormSelect} from "./FormSelect"
import {WeatherCardItem} from "./WeatherCardItem"

export const ForecastOneDay: React.FunctionComponent = () => {
    return <div className='forecast-container'>
        <h2 className='forecast-seven-days-container__h2'>Forecast for a Date in the Past</h2>
        <FormSelect/>
        <WeatherCardItem/>
    </div>
}