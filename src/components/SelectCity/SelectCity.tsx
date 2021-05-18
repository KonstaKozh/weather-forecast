import React from "react"
import './SelectCity.css'

export const SelectCity: React.FunctionComponent = () => {
    return (
        <select className='select'>
            <option selected className='option'>Select city</option>
            <option>Самара</option>
            <option>Тольятти</option>
            <option>Саратов</option>
            <option>Казань</option>
            <option>Краснодар</option>
        </select>
    )
}