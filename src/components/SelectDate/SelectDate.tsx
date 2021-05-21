import React, {useContext, useState} from "react"
import './SelectDate.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext"

export const SelectedDate: React.FunctionComponent = () => {
    const context = useContext(WeatherForecastContext)
    const [selectedDate, setDate] = useState(new Date())
    // const month = () => {
    //     if selectedDate.getMonth().len
    // }
    // const currentDate = `${selectedDate.getFullYear()}-0${selectedDate.getMonth()}-0${selectedDate.getDay()}`
    const currentDate = Date.now()


    const handleDataSelect = (e: any) => {
        const selectedDate = e.target.value
        console.log('onChange', e, selectedDate, currentDate)
        // @ts-ignore
        context.fetchWeatherDate(selectedDate)
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