import {createContext} from "react"

type State = any
export const OpenweathermapContext: any = createContext<State |undefined>(undefined)