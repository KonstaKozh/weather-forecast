import React, {ChangeEvent, FunctionComponent} from "react"
import './SelectCity.css'
import {cities} from '../../cityData.json'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";

export const SelectCity: FunctionComponent<SelectCityProps> = ({value, cities, onChange}) => {
    const handleCitySelect = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(+e.target.value)
    }

    return (
        <select className='select' onChange={handleCitySelect} value={value}>
            <option selected disabled hidden value=''>Select city</option>
            {
                cities.map((city, index) => {
                    const {id, name} = city
                    return (<option key={id} value={index}>{name}</option>)
                })
            }
        </select>
    )
}