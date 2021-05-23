import React from "react";
import {SELECT_DATE, GET_WEATHERS, GET_WEATHER, SELECT_CITY_INDEX, SET_LOADING, SET_STOP_LOADING, SELECT_CITY_ONE_INDEX} from "../type";

const handlers = {
    // @ts-ignore
    [SELECT_CITY_INDEX]: (state, {payload}) => ({...state, selectedCityIndex: payload}),
    // @ts-ignore
    [SELECT_CITY_ONE_INDEX]: (state, {payload}) => ({...state, selectedCityOneIndex: payload}),
    // @ts-ignore
    [GET_WEATHERS]: (state, {payload}) => ({...state, weathers: payload, loading: false}),
    // @ts-ignore
    [GET_WEATHER]: (state, {payload}) => ({...state, weather: payload}),

    // @ts-ignore
    [SET_LOADING]: state => ({...state, loading: true}),
    // @ts-ignore
    [CLEAR_WEATHERS]: state => ({...state, weathers: []}),
    // @ts-ignore
    DEFAULT: state => state
}
//action: {type: CLEAR_WEATHERS}
export const weatherForecastReducer: React.FunctionComponent = (state, action) => {
   // @ts-ignore
    const handler = handlers[action.type] || handlers.DEFAULT // handler = state => ({...state, weathers: []})
    return handler(state, action)
}