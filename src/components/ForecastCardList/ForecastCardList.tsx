import React from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem";

export const ForecastCardList: React.FunctionComponent = () => {
    return (
        <div className='weather-card-list'>
            <ForecastCardItem/>
            <ForecastCardItem/>
            <ForecastCardItem/>
            <div className='weather-card'>
                <p className='weather-card__p'>Fill in all the fields and the weather will be displayed</p>
            </div>
        </div>

    )
}

