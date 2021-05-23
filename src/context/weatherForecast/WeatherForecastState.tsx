import React, {useReducer} from "react"
import {WeatherForecastContext} from "./weatherForecastContext";
import {weatherForecastReducer} from "./weatherForecastReducer";
import {SELECT_DATE, GET_WEATHERS, GET_WEATHER, SET_LOADING, SET_STOP_LOADING, SELECT_CITY_INDEX, SELECT_CITY_ONE_INDEX} from "../type";
import {fetchSevenDaysForecast, fetchOneDayForecast} from "../../api/requests";
import {Coordinates} from "../../types";

// const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY
const keyAPI: string = '3271c2ed7c22a57273a4549fd585d36f'

type WeatherForecastState = {
    selectedCityIndex?: number
    selectedCityOneIndex?: number
    selectedDate: Date
    loading: boolean
    weathers: []
    weather: any
}

export const WeatherForecastState: React.FunctionComponent = ({children}) => {
    const initialState: WeatherForecastState = {
        selectedCityIndex: undefined,
        selectedCityOneIndex: undefined,
        selectedDate: new Date(0),
        loading: false,
        weathers: [],
        weather: null
    }
    // @ts-ignore
    const [state, dispatch] = useReducer(weatherForecastReducer, initialState)

    const selectCityIndex = (index: number) => {
        //@ts-ignore
        dispatch({
            type: SELECT_CITY_INDEX,
            payload: index
        })
    }

    const selectCityOneIndex = (index: number) => {
        //@ts-ignore
        dispatch({
            type: SELECT_CITY_ONE_INDEX,
            payload: index
        })
    }

    const getSevenDaysForecast = async (coordinates: Coordinates) => {
        try{
            setLoading()
            const sevenDaysForecast = await fetchSevenDaysForecast(coordinates)
            //@ts-ignore
            dispatch({
                type: GET_WEATHERS,
                payload: sevenDaysForecast
            })
            setStopLoading()
        } catch (e) {
            setStopLoading()
            throw new Error(e.message)
        }
    }

    const getOneDayForecast = async (coordinates: Coordinates, date: string) => {
        try{
            setLoading()
            const oneDayForecast = await fetchOneDayForecast(coordinates, date)
            //@ts-ignore
            dispatch({
                type: GET_WEATHER,
                payload: oneDayForecast
            })
            setStopLoading()
        } catch (e) {
            setStopLoading()
            throw new Error(e.message)
        }
    }


    const clearWeathers = () => {
        console.log("clear_weather");
        //@ts-ignore
        return dispatch({type: CLEAR_WEATHERS})
    }

    //@ts-ignore
    const setLoading = () => dispatch({type: SET_LOADING})

    const {selectedCityIndex, selectedCityOneIndex, selectedDate, loading, weathers, weather} = state

    return (
        <WeatherForecastContext.Provider
            value={{
                getSevenDaysForecast, getOneDayForecast, selectCityIndex, selectCityOneIndex, selectDate,
                selectedCityIndex, selectedCityOneIndex, selectedDate, loading, weathers, weather
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

