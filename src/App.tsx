import React from 'react'
import {ForecastSevenDays} from "./components/ForecastSevenDays";
import {ForecastOneDay} from "./components/ForecastOneDay";

const App: React.FC = () => {
  return    <main>
                <h1 className='title' >Weather forecast</h1>
                <ForecastSevenDays />
                <ForecastOneDay />
                <span>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</span>
            </main>

}

export default App
