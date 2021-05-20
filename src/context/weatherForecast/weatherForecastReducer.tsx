import React from "react";
import {CLEAR_WEATHERS, GET_WEATHERS, SELECT_CITY, SET_LOADING} from "../type";

const handlers = {
    SELECT_CITY: (state, {payload}) => ({...state, city: payload, loading: false}),
    [GET_WEATHERS]: (state, {payload}) => ({...state, weathers: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    [CLEAR_WEATHERS]: state => ({...state, weathers: []}),
    DEFAULT: state => state
}
//action: {type: CLEAR_WEATHERS}
export const weatherForecastReducer: React.FunctionComponent = (state, action) => {
   // @ts-ignore
    const handler = handlers[action.type] || handlers.DEFAULT // handler = state => ({...state, weathers: []})
    return handler(state, action)
}