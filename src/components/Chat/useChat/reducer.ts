import { Reducer } from 'react'

import firebase from '../../../Firebase'

const initialState: State = {
    user: null,
    channel: null
}

const reducer: Reducer<State, ActionTypes> = (state, action) => {
    const { type, payload } = action
    const database = firebase.database()

    switch (type) {
        case 'setActiveUser':
            return { ...state, user: payload }
        case 'checkIn':
            return { ...state, channel: payload };
        case 'checkOut':
            return { ...state, channel: null };
        case 'sendMessage':
            const { user, channel} = state
            if (user && channel) {
                const { uid, displayName } = user
                console.log(uid, displayName, payload)
                database.ref(`messages/${channel.id}`).push().set({
                    message: payload,
                    user: {
                        id: uid,
                        name: displayName,
                    },
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                })
            }
            return state
        default:
            throw new Error();
    }
}

export default reducer
export { initialState }