import React from 'react'
import {ForecastSevenDays} from "./components/ForecastSevenDays/ForecastSevenDays";
import {ForecastOneDay} from "./components/ForecastOneDay/ForecastOneDay";
import {WeatherForecastState} from "./context/weatherForecast/WeatherForecastState";

function App() {
    return (
        <WeatherForecastState>
            <main>
                <h1 className='header-title'>Weather forecast</h1>
                <div className='forecast-wrapper'>
                    <ForecastSevenDays/>
                    <ForecastOneDay/>
                </div>
                <p className='footer-title'>C любовью от mercury development</p>
            </main>
        </WeatherForecastState>
    )
}

export default App
