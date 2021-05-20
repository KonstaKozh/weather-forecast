import React, {useState} from "react"
import './SelectDate.css'

export const SelectDate: React.FunctionComponent = () => {
    const [date, setDate] = useState(Date.now())

    const onChange = (e: any) => {
        const {name} = e.target.dataset;
        console.log('onChange', name)
    }
    return (
        <input
            type="date"
            className='select'
            name="date"
            placeholder='date'
            min="2017-04-01"
            max="2017-04-01"
            onChange={onChange}
        />
    )
}