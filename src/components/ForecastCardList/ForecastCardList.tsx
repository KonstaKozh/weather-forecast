import React, {useContext} from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem";
import './ForecastCardList.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";

export const ForecastCardList: React.FunctionComponent = () => {
    const {loading, weathers, selectedCity} = useContext(WeatherForecastContext)
    const temp = weathers //temperature

    const weathersThree = weathers.slice(0, 3) //менять эти значения по клику на <>

    return (
        <>
            {selectedCity
                ? <div className='weather-card-list'>
                    {loading
                        ? <p>Загрузка...</p>
                        : weathersThree.map((card: React.Key | null | undefined) => {
                                return <ForecastCardItem key={card}/>
                            }
                        )
                    }
                </div>
                : <div className='weather-card-blank'>
                    <p className='weather-card-blank__p'>Fill in all the fields and the weather will be displayed</p>
                </div>
            }
        </>
    )
}

