import React, {useContext, useState} from "react"
import './SelectCity.css'
import {cities} from '../../cityData.json'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";


export const SelectCity: React.FunctionComponent = () => {
        const context = useContext(WeatherForecastContext);
    // const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    // const keyAPI: string = '3271c2ed7c22a57273a4549fd585d36f'

    const handleCitySelect = (e: any) => {
        const selectedCity = cities[e.target.value]
        // @ts-ignore
        context.fetchWeatherData(selectedCity)
    }


    return (
        <select className='select' onChange={e => handleCitySelect(e)}>
            {/*<option selected disabled hidden value='1'>Select city</option>*/}
            {
                cities.map((city, index) => {
                    const {id, name} = city
                    return (<option key={id} value={index}>{name}</option>)
                })
            }
        </select>
    )
}