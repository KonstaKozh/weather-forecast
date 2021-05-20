import React, {useReducer} from "react"
import {OpenweathermapContext} from "./openweathermapContext";
import {openweathermapReducer} from "./openweathermapReducer";
import {CLEAR_WEATHERS, GET_WEATHERS, SET_LOADING} from "../type";

// const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY
const keyAPI: string = '3271c2ed7c22a57273a4549fd585d36f'

export const OpenweathermapState: React.FunctionComponent = ({children}) => {
    const initialState = {
        selectedCity: {},
        selectedDate: '',
        loading: false,
        forecast: []
    }
    const [state, dispatch] = useReducer(openweathermapReducer, initialState)

    const fetchWeatherData = async (city: { name?: string; id?: number; coordinates: any }) => {
        setLoading(true)
        const {lat, lon} = city.coordinates
        const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${keyAPI}`;
        const result = await fetch(url)
        const data = await result.json()
        console.log(data.daily)
        setData(data.daily)
        dispatch({
            type: GET_WEATHERS,
            payload: data
        })
        setLoading(false)
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