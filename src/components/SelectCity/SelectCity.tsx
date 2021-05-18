import React, {useState} from "react"
import './SelectCity.css'

export const SelectCity: React.FunctionComponent = () => {

    const [addrtype, setAddrtype] = useState(['Самара', 'Тольятти', 'Саратов', 'Казань', 'Краснодар'])
    const Add = addrtype.map(Add => Add )
    const handleCitySelect = (e: any) => {
        console.log(e.target)
    }
    return (
        <select className='select' onChange={(e) => handleCitySelect(e)}>
            <option selected disabled hidden>Select city</option>
            {
                Add.map((address, key) => <option key={key}value={key}>{address}</option>)
            }
        </select>
    )
}