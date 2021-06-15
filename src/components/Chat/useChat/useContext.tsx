import React, { FC, useContext, createContext } from "react"

import useContainer from './useContainer'
import { initialState } from './reducer'

const Context = createContext<ChatContext>([initialState, () => null ])

const Provider: FC = ({ children }) => {
	const [state, dispatch] = useContainer()
	return <Context.Provider value={[state, dispatch]}> {children}</Context.Provider>
}

const useState = (): ChatContext => {
	const [state, dispatch] = useContext(Context)
	return [state, dispatch]
}

export default useState
export { Context, Provider }