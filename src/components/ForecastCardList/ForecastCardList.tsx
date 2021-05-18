import React from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem";
import './ForecastCardList.css'

export const ForecastCardList: React.FunctionComponent = () => {
    return (
        <>
            <div className='weather-card-list'>
                <ForecastCardItem/>
                <ForecastCardItem/>
                <ForecastCardItem/>
            </div>
            <div className='weather-card-blank'>
                <p className='weather-card-blank__p'>Fill in all the fields and the weather will be displayed</p>
            </div>
        </>
    )
}

