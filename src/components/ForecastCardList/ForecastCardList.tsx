import React, {useContext, useState} from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem";
import './ForecastCardList.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";

export const ForecastCardList: React.FunctionComponent = () => {
    const {loading, weathers, selectedCity} = useContext(WeatherForecastContext)
    let [count, setCount] = useState(0);

    if (count < 0) {
        count = 0
    }
    if (count > 4) {
        count = 4
    }
    const weathersThree = weathers.slice(count, count + 3)

    return (
        <>
            {selectedCity
                ? <div className='weather-card-list'>
                    {loading
                        ? <p className='loading'>Загрузка...</p>
                        : <>
                            <button className='weather-card-list__arrow-left'
                                    onClick={() => setCount(count + 1)}></button>
                            {weathersThree.map((card: any) => (<ForecastCardItem cardInfo={card} key={card.dt}/>))}
                            <button className='weather-card-list__arrow-right'
                                    onClick={() => setCount(count - 1)}></button>
                        </>
                    }

                </div>
                : <div className='weather-card-blank'>
                    <p className='weather-card-blank__p'>Fill in all the fields and the weather will be displayed</p>
                </div>
            }
        </>
    )
}

