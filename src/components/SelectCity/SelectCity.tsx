import React, {ChangeEvent, FunctionComponent} from "react"
import './SelectCity.css'

type SelectCityProps = {
    value?: number
    cities: any[]
    onChange: (value: number) => void
}

export const SelectCity: FunctionComponent<SelectCityProps> = ({value, cities, onChange}) => {

    const handleCitySelect = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(+e.target.value)
    }

    return (
        <select className='select' onChange={handleCitySelect} value={value}>
            <option selected disabled hidden value=''>Select city</option>
            {
                cities && cities.map((city, index) => {
                    const {id, name} = city
                    return (<option key={id} value={index}>{name}</option>)
                })
            }
        </select>
    )
}