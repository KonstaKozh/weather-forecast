import React, {useState} from "react"
import './SelectCity.css'
import {cities} from '../../cityData.json'

export const SelectCity: React.FunctionComponent = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const keyAPI: string = '3271c2ed7c22a57273a4549fd585d36f'

    const handleCitySelect = (e: any) => {
        const lat: any = cities.find(item => {
            if (item.name === e.target.value) {
                return item.coordinates.lat
            }
        })

        // const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={keyAPI}`;
        // const fetchWeatherData = async (value: string) => {
        //     setLoading(true)
        //     const result = await fetch(url)
        //     setData(result.data)
        //     setLoading(false)
        // }
        // console.log(e.target.value)
    }

    return (
        <select className='select' onChange={e => handleCitySelect(e)}>
            {/*<option selected disabled hidden value='1'>Select city</option>*/}
            {
                // console.log(cities)
                cities.map((city: any, index: number) => {
                    // const id = city.id
                    // const name = city.name
                    const {id: any, name: string} = city
                    console.log(id)
                    return (<option key={id} value={index}>{name}</option>)
                })
            }
        </select>
    )
}