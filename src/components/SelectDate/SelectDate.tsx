import React, {ChangeEvent, useContext, useState} from "react"
import './SelectDate.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext"

export const SelectDate: React.FunctionComponent = () => {
    const {selectedDate, selectDate} = useContext(WeatherForecastContext)
    const currentDate = Date.now()

 const handleDateSelect = (e: ChangeEvent<HTMLInputElement>) => {
        selectDate(e.target.value)
    }

    return (
        <input
            type="date"
            className='select'
            name="date"
            placeholder='date'
            min="2017-04-01"
            max={currentDate}
            value={selectedDate}
            onChange={handleDateSelect}
        />
    )
}