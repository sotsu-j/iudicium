import React, { FC, useReducer, useContext, createContext, Dispatch } from "react"

import useContainer from './useContainer'
import reducer, { initialState } from './reducer'

const Context = createContext<{
	state: State;
	dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null })

const Provider: FC = ({ children }) => {
	const { state, dispatch } = useContainer()
	return <Context.Provider value={{ state, dispatch }}> {children}</Context.Provider>
}

const useState = () => {
	const { state, dispatch } = useContext(Context)
	return { state, dispatch }
}

export default useState
export { Context, Provider }