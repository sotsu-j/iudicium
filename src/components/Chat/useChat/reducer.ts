const initialState = {
    channel: null
}

const reducer = (state: State, action: CheckInAction | CheckOutAction): State => {
    const { type, payload } = action
    switch (type) {
        case 'checkIn':
            return { channel: payload, ...state };
        case 'checkOut':
            return state;
        default:
            throw new Error();
    }
}

export default reducer
export { initialState }