import React from "react"

export const FormSelect: React.FunctionComponent = () => {
    return (
        <form className='form-box'>
            <select className='select'>
                <option selected className='option'>Select city</option>
                <option>Самара</option>
                <option>Тольятти</option>
                <option>Саратов</option>
                <option>Казань</option>
                <option>Краснодар</option>
            </select>
            <input type="date" className='select' id="party" name="party" placeholder='party' min="2017-04-01" max="2017-04-01" />
        </form>
    )
}