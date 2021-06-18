import { Reducer } from 'react'

import firebase from '../../../Firebase'
import { getHash } from '../../../utils/hash'

const initialState: State = {
    user: null,
    channel: null,
    sessionID: null,
}

const reducer: Reducer<State, ActionTypes> = (state, action) => {
    const { type, payload } = action
    const database = firebase.database()

    switch (type) {
        default:
            throw new Error();
        case 'setActive':
            if(payload){
                database.ref(`users/${payload.id}`).update({
                    'name': payload.name,
                    'photoURL': payload.photoURL,
                    'status': { isActive: true, description: '接続中' },
                })
            }
            const sessionID = payload ? database.ref(`sessions`).push({ user: payload }).key : null
            return { ...state, user: payload, sessionID }
        case 'inActive':
            if (state.user) {
                checkOut(state)
                database.ref(`users/${state.user.id}/status`).set({ isActive: false, description: 'オフライン' })
            }
            if (state.sessionID) {
                database.ref(`sessions/${state.sessionID}`).remove()
            }
            return state
        case 'checkIn':
            return checkIn(state, payload)
        case 'checkOut':
            return checkOut(state)
        case 'sendMessage':
            const { user, channel } = state
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
    }
}

const checkIn = (state: State, payload: Payload) => { // payload にチャンネル情報
    const database = firebase.database()
    if (payload && state.user) {
        database.ref(`sessions/${state.sessionID}/connectedChannelID`).set(payload.id)
    }
    return { ...state, channel: payload };
}

const checkOut = (state: State) => {
    const database = firebase.database()
    if (state.user && state.channel) {
        database.ref(`sessions/${state.sessionID}/connectedChannelID`).remove()
    }
    return { ...state, channel: null };
}

export default reducer
export { initialState }