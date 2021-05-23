import React, {useContext, FunctionComponent} from "react"
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";
import {SelectCity} from "./SelectCity";
import {cities} from "../../cityData.json"

export const SelectCityContainer: FunctionComponent = () => {
    const {selectCityIndex, selectedCityIndex} = useContext(WeatherForecastContext)

    const handleCitySelect = (value: number): void => {
        selectCityIndex(value);
    }

    return <SelectCity value={selectedCityIndex} cities={cities} onChange={handleCitySelect}/>
}