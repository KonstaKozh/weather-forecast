import React from "react"


export const WeatherCardItem: React.FunctionComponent = () => {
    const imgSrc: string = "../src/img/light-rain-icon.svg"
    return(
    <div className='weather-card-item'>
    <time>27 sep 2021</time>
    <img src={imgSrc} height='120px' alt="light-rain" />
    <p className='temperature'>+17&deg;</p>
    </div>
    )
}
