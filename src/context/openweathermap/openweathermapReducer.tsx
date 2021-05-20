import React from "react";
import {CLEAR_WEATHERS, GET_WEATHERS, SELECT_CITY, SET_LOADING} from "../type";

const handlers = {
    SELECT_CITY: (state, {payload}) => ({...state, city: payload, loading: false}),
    [GET_WEATHERS]: (state, {payload}) => ({...state, weathers: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    [CLEAR_WEATHERS]: state => ({...state, weathers: []}),
    DEFAULT: state => state
}

export const openweathermapReducer: React.FunctionComponent = (state, action) => {
   const handler = handlers[action.types] || handlers.DEFAULT
    return handler(state, action)
}