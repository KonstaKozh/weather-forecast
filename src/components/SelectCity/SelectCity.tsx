import React, {useContext, useState} from "react"
import './SelectCity.css'
import {cities} from '../../cityData.json'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";


export const SelectCity: React.FunctionComponent = () => {
        const context = useContext(WeatherForecastContext)
        // const [data, setData] = useState({})

    const handleCitySelect = (e: any) => {
        const selectedCity = cities[e.target.value]
        // @ts-ignore
        context.fetchWeatherCity(selectedCity)
    }

    return (
        <select className='select' onChange={e => handleCitySelect(e)}>
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