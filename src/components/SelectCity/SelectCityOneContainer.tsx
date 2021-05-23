import React, {useContext, FunctionComponent} from "react"
import {WeatherForecastContext} from "../../context/weatherForecast/weatherForecastContext";
import {SelectCity} from "./SelectCity";
import {cities} from "../../cityData.json"

export const SelectCityOneContainer: FunctionComponent = () => {
    const {selectCityOneIndex, selectedCityOneIndex} = useContext(WeatherForecastContext)

    const handleCitySelect = (value: number): void => {
        selectCityOneIndex(value);
    }

    return <SelectCity value={selectedCityOneIndex} cities={cities} onChange={handleCitySelect}/>
}