import { useReducer } from "react"

import reducer, { initialState } from './reducer'

const useContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return [state, dispatch]
}

export default useContainer