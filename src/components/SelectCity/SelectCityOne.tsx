import React, {useContext, useState} from "react"
import './SelectCity.css'
import {cities} from '../../cityData.json'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";


export const SelectCityOne: React.FunctionComponent = () => {
    const context = useContext(WeatherForecastContext)
    // @ts-ignore
    const {selectedDate} = context
    const handleCitySelectOne = (e: any) => {

        const selectedCityOne = cities[e.target.value]
        // @ts-ignore
        context.fetchWeatherCityOne(selectedCityOne, selectedDate)
    }

    return (
        <select className='select' onChange={e => handleCitySelectOne(e)}>
            <option selected disabled hidden value='1'>Select city</option>
            {
                cities.map((city, index) => {
                    const {id, name} = city
                    return (<option key={id} value={index}>{name}</option>)
                })
            }
        </select>
    )
}