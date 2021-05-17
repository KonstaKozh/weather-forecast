import React from 'react'
import {ForecastSevenDays} from "./components/ForecastSevenDays";
import {ForecastOneDay} from "./components/ForecastOneDay";

const App: React.FC = () => {
    return <main>
        <h1 className='title'>Weather forecast</h1>
        <div className='forecast-wrapper'>
            <ForecastSevenDays/>
            <ForecastOneDay/>
        </div>
        <p>C любовью от mercury development</p>
    </main>

}

export default App
