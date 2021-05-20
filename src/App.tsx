import React from 'react'
import {ForecastSevenDays} from "./components/ForecastSevenDays/ForecastSevenDays";
import {ForecastOneDay} from "./components/ForecastOneDay/ForecastOneDay";
import {WeatherForecastState} from "./context/weatherForecast/WeatherForecastState";

const App: React.FC = () => {
    return (
        <WeatherForecastState>
            <main>
                <h1 className='title'>Weather forecast</h1>
                <div className='forecast-wrapper'>
                    <ForecastSevenDays/>
                    <ForecastOneDay/>
                </div>
                <p className='main__p'>C любовью от mercury development</p>
            </main>
        </WeatherForecastState>
    )
}

export default App
