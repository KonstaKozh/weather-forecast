import React, {useContext, useState, useEffect} from "react"
import {ForecastCardItem} from "../ForecastCardItem/ForecastCardItem"
import './ForecastCardList.css'
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext"
import {getCityByIndex} from "../../utils"

export const ForecastCardList: React.FunctionComponent = () => {
    const {loading, weathers, selectedCityIndex, getSevenDaysForecast} = useContext(WeatherForecastContext)
    const [count, setCount] = useState(0)
    const weathersThree = weathers && weathers.slice(count, count + 3)

    useEffect(() => {
        if (selectedCityIndex >= 0) {
            const selectedCity = getCityByIndex(selectedCityIndex)
            getSevenDaysForecast(selectedCity.coordinates)
        }
    }, [selectedCityIndex])

    return (
        <>
            {(selectedCityIndex >= 0)
                ? <div className='weather-card-list'>
                    {loading
                        ? <p className='loading'>Загрузка...</p>
                        : <>
                            {(count === 0)
                                ? null
                                : <button className='weather-card-list__arrow-left'
                                          onClick={() => setCount(count - 1)}/>
                            }

                            {weathersThree.map((card: any) => (<ForecastCardItem cardInfo={card} key={card.dt}/>))}
                            {(count > 3)
                                ? null
                                : <button className='weather-card-list__arrow-right'
                                          onClick={() => setCount(count + 1)}/>
                            }
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

