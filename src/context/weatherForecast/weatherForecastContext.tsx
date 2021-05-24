import {createContext} from "react"

type State = any

export const WeatherForecastContext: any = createContext<State>(null)