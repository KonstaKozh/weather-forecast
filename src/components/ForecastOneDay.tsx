import React from "react"
import {FormSelect} from "./FormSelect";
import {WeatherCardList} from "./WeatherCardList";

export const ForecastOneDay: React.FunctionComponent = () => {
    return <div className='forecast-seven-days-wrapper'>
        <h2>Forecast for a Date in the Past</h2>
        <FormSelect />
        <WeatherCardList />
    </div>
}