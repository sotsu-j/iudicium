import React, { FC, useContext, createContext } from "react"

import useContainer from './useContainer'

const Context = createContext([{}, () => { }])

const Provider: FC = ({ children }) => {
	const container = useContainer()
	return <Context.Provider value={container}> {children}</Context.Provider>
}

const useState = () => {
	const [state, dispatch] = useContext(Context)
	return [state, dispatch]
}

export default useState
export { Context, Provider }