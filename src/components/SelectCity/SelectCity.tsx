import React, {useState} from "react"
import './SelectCity.css'

export const SelectCity: React.FunctionComponent = () => {

    const [city, setСity] = useState(['Самара', 'Тольятти', 'Саратов', 'Казань', 'Краснодар'])
    const handleCitySelect = (e: any) => {
        console.log(city[e.target.value])
    }
    return (
        <select className='select' onChange={e => handleCitySelect(e)}>
            {/*<option selected disabled hidden value='1'>Select city</option>*/}
            {
                city.map((address, key) => <option key={key} value={key}>{address}</option>)
            }
        </select>
    )
}