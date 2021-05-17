import React from "react"
import {WeatherCardItem} from "./WeatherCardItem";

export const WeatherCardList: React.FunctionComponent = () => {
    return (
        <div className='weather-card-list'>
            <WeatherCardItem/>
            <WeatherCardItem/>
            <WeatherCardItem/>
            <div className='weather-card'>
                <p className='weather-card__p'>Fill in all the fields and the weather will be displayed</p>
            </div>
        </div>

    )
}

