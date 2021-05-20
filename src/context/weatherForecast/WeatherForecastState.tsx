import React, {useReducer} from "react"
import {WeatherForecastContext} from "./weatherForecastContext";
import {weatherForecastReducer} from "./weatherForecastReducer";
import {CLEAR_WEATHERS, GET_WEATHERS, SET_LOADING} from "../type";
import {log} from "util";

// const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY
const keyAPI: string = '3271c2ed7c22a57273a4549fd585d36f'

export const WeatherForecastState: React.FunctionComponent = ({children}) => {
    const initialState: WeatherForecastState = {
        selectedCity: undefined,
        selectedDate: '',
        loading: false,
        forecast: []
    }
    // @ts-ignore
    const [state, dispatch] = useReducer(weatherForecastReducer, initialState)

    const fetchWeatherData = async (city: { name?: string; id?: number; coordinates: any }) => {
        setLoading()
        const {lat, lon} = city.coordinates
        const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${keyAPI}`;
        const result = await fetch(url)
        const data = await result.json()
        console.log(data.daily)

        // setData(data.daily)
        //@ts-ignore
        dispatch({
            type: GET_WEATHERS,
            payload: data.daily
        })
    }
    // const getForecast = async value => {
    //     setLoading()
    //     dispatch({
    //         type: GET_WEATHERS,
    //         payload: []
    //     })
    // }

    const clearWeathers = () => dispatch({type: CLEAR_WEATHERS})

    const setLoading = () => dispatch({type: SET_LOADING})

    const {selectedCity, selectedDate, loading, forecast} = state

    return (
        <OpenweathermapContext value = {{
            setLoading, fetchWeatherData, clearWeathers,
            selectedCity, selectedDate, loading, forecast
        }}>
            {children}
        </OpenweathermapContext>
    )
}