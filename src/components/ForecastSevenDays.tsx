import React from 'react'
import {FormSelect} from "./FormSelect";
import {WeatherCard} from "./WeatherCard";

export const ForecastSevenDays: React.FunctionComponent = () => {
    return (
        <div className='forecast-seven-days-wrapper'>
            <h2>7 Days Forecast</h2>
            <FormSelect />
            <WeatherCard />
        </div>
    )

}