import React, {useContext, useState} from "react"
import './SelectDate.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext"

export const SelectDate: React.FunctionComponent = () => {
    const context = useContext(WeatherForecastContext)
    const [selectedDate, setDate] = useState(new Date())
    const currentDate = Date.now()
    // @ts-ignore
    const {selectedCity} = context;


    const handleDataSelect = (e: any) => {
        const selectedDate = e.target.valueAsNumber/1000
        console.log('onChange', e, "selectedDate-", selectedDate, currentDate)
        // @ts-ignore
        context.fetchWeatherDate(selectedCity, selectedDate)
    }

    return (
        <input
            type="date"
            className='select'
            name="date"
            placeholder='date'
            min="2017-04-01"
            max={currentDate}
            // value=''
            onChange={e => handleDataSelect(e)}
        />
    )
}