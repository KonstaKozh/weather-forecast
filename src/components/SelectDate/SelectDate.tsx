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

    console.log(selectedDate, currentDate)

    const handleCitySelect = (e: any) => {
        // const selectedDate = new Date(e.input.select())
        console.log('onChange', e)
    }

    return (
        <input
            type="date"
            className='select'
            name="date"
            placeholder='date'
            min="2017-04-01"
            // max={currentDate}
            value='2017-04-01'
            onChange={e => handleCitySelect(e)}
        />
    )
}