import React from "react";
import {CLEAR_WEATHERS, GET_WEATHERS, SELECT_CITY, SET_LOADING} from "../type";

const handlers = {
    // @ts-ignore
    [SELECT_CITY]: (state, {payload}) => ({...state, selectedCity: payload, loading: false}),
    // @ts-ignore
    [GET_WEATHERS]: (state, {payload}) => ({...state, weathers: payload, loading: false}),
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