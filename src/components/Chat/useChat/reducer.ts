import { Reducer } from 'react'

const initialState: State = {
    channel: null
}

const reducer: Reducer<State, ActionTypes> = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'checkIn':
            return { ...state, channel: payload };
        case 'checkOut':
            return { ...state, channel: null };
        default:
            throw new Error();
    }
}

export default reducer
export { initialState }