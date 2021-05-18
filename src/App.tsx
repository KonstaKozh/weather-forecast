import React from 'react'
import {ForecastSevenDays} from "./components/ForecastSevenDays/ForecastSevenDays";
import {ForecastOneDay} from "./components/ForecastOneDay/ForecastOneDay";

const App: React.FC = () => {
    return <main>
        <h1 className='title'>Weather forecast</h1>
        <div className='forecast-wrapper'>
            <ForecastSevenDays/>
            <ForecastOneDay/>
        </div>
        <p className='main__p'>C любовью от mercury development</p>
    </main>
}

export default App
