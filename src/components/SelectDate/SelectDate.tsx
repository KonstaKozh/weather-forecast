import React from "react"
import './SelectDate.css'

export const SelectDate: React.FunctionComponent = () => {
    return (
        <input type="date" className='select' id="party" name="party" placeholder='party' min="2017-04-01" max="2017-04-01" />
    )
}