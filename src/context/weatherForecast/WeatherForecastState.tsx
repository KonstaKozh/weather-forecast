import React, {useReducer} from "react"
import {WeatherForecastContext} from "./weatherForecastContext";
import {weatherForecastReducer} from "./weatherForecastReducer";
import {CLEAR_WEATHERS, GET_WEATHERS, SET_LOADING, SELECT_CITY} from "../type";

// const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY
const keyAPI: string = '3271c2ed7c22a57273a4549fd585d36f'

type WeatherForecastState = {
    selectedCity?: {
        id: string;
        name: string;
        coordinates: {
            lat: string;
            lon: string;
        }
    };
    selectedDate: Date;
    loading: boolean;
    weathers: []
}

export const WeatherForecastState: React.FunctionComponent = ({children}) => {
    const initialState: WeatherForecastState = {
        selectedCity: undefined,
        selectedDate: new Date(),
        loading: false,
        weathers: []
    }
    // @ts-ignore
    const [state, dispatch] = useReducer(weatherForecastReducer, initialState)

    const fetchWeatherCity = async (city: { name?: string; id?: number; coordinates: any }) => {
        setLoading()
        const {lat, lon} = city.coordinates
        const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${keyAPI}`;
        const result = await fetch(url)
        const weathers = await result.json()
        weathers.daily.length = 7
        const selectedCity = city
        console.log(weathers.daily[0].weather[0].icon, selectedCity)

        // setData(data.daily)
        //@ts-ignore
        dispatch({
            type: GET_WEATHERS,
            payload: weathers.daily
        })

        // @ts-ignore
        dispatch({
            type: SELECT_CITY,
            payload: selectedCity
        })
    }

    const fetchWeatherDate = async (city: { name?: string; id?: number; coordinates: any }) => {
        setLoading()
        const {lat, lon} = city.coordinates
        const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${keyAPI}`;
        const result = await fetch(url)
        const weathers = await result.json()
        weathers.daily.length = 7
        const selectedCity = city
        console.log(weathers.daily[0].weather[0].icon, selectedCity)

        // setData(data.daily)
        //@ts-ignore
        dispatch({
            type: GET_WEATHERS,
            payload: weathers.daily
        })

        // @ts-ignore
        dispatch({
            type: SELECT_CITY,
            payload: selectedCity
        })
    }



    const clearWeathers = () => {
        console.log("clear_weather");
        //@ts-ignore
        return dispatch({type: CLEAR_WEATHERS})}

        //@ts-ignore
    const setLoading = () => dispatch({type: SET_LOADING})

    const {selectedCity, selectedDate, loading, weathers} = state

    return (
        <WeatherForecastContext.Provider
            value = {{
            setLoading, fetchWeatherCity, clearWeathers,
                selectedCity, selectedDate, loading, weathers
        }}>
            {children}
        </WeatherForecastContext.Provider>
    )
}


// click - handler - dispatch(action) - reducer(prevState, action) - (new)state

/*
<... onclick={handler}>
            ↓
const handler = () => {
    dispatch(resetCountAction)
}
            ↓
const resetCountAction = {
    type: 'RESET_COUNT'
}
            ↓
reducer = (state, action) => {
    if (action.type === 'RESET_COUNT) {
        return {..state, count: 0}          ←   (new)state
    }
*/

