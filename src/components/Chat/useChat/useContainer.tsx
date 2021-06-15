import { useReducer } from "react"

import reducer, { initialState } from './reducer'

const useContainer = (): ChatContext => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}

export default useContainer