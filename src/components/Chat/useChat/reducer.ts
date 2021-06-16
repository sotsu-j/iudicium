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
            if (payload) {
                database.ref(`users/${payload.id}/name`).set(payload.name)
                database.ref(`users/${payload.id}/photoURL`).set(payload.photoURL)
            }
            return { ...state, user: payload }
        case 'checkIn':
            return { ...state, channel: payload };
        case 'checkOut':
            return { ...state, channel: null };
        case 'sendMessage':
            const { user, channel} = state
            if (user && channel) {
                const { id, name } = user
                console.log(id, name, payload)
                database.ref(`messages/${channel.id}`).push().set({
                    message: payload,
                    user: {
                        id: id,
                        name: name,
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