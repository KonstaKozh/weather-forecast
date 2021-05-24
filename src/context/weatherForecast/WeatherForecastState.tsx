import React, {useReducer} from "react"
import {WeatherForecastContext} from "./weatherForecastContext"
import {weatherForecastReducer} from "./weatherForecastReducer"
import {SELECT_DATE, GET_WEATHERS, GET_WEATHER, SET_LOADING, SET_STOP_LOADING, SELECT_CITY_INDEX, SELECT_CITY_ONE_INDEX} from "../type"
import {fetchSevenDaysForecast, fetchOneDayForecast} from "../../api/requests"
import {Coordinates} from "../../types"

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

    //@ts-ignore
    const selectDate = (date) => dispatch({type: SELECT_DATE, payload: date})

    //@ts-ignore
    const setLoading = () => dispatch({type: SET_LOADING})

    //@ts-ignore
    const setStopLoading = () => dispatch({type: SET_STOP_LOADING})

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


