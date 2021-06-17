import { Reducer } from 'react'

import firebase from '../../../Firebase'
import { getHash } from '../../../utils/hash'

const initialState: State = {
    user: null,
    channel: null,
    tabID: null,
}

const reducer: Reducer<State, ActionTypes> = (state, action) => {
    const { type, payload } = action
    const database = firebase.database()

    const checkIn = () => {
        if (payload && state.user) {
            database.ref(`users/${state.user.id}/connectedChannels/${payload.id}/${state.tabID}`).set(true)
        }
        return { ...state, channel: payload };
    }

    const checkOut = () => {
        if (state.user && state.channel) { // どこかに入室している場合はチェックアウト
            database.ref(`users/${state.user.id}/connectedChannels/${state.channel.id}/${state.tabID}`).remove()
        }
        return { ...state, channel: null };
    }

    switch (type) {
        default:
            throw new Error();
        case 'setActive':
            if (payload) {
                database.ref(`users/${payload.id}/name`).set(payload.name)
                database.ref(`users/${payload.id}/photoURL`).set(payload.photoURL)
                database.ref(`users/${payload.id}/status`).set({ isActive: true, description: '接続中' })
            }
            const tabID = getHash()
            return { ...state, user: payload, tabID }
        case 'inActive':
            if (state.user) {
                checkOut()
                database.ref(`users/${state.user.id}/status`).set({ isActive: false, description: 'オフライン' })
            }
            return state
        case 'checkIn':
            if (state.channel && payload) {
                state.channel.id !== payload.id && checkOut() // どこかに入室している場合はチェックアウト
            }
            return checkIn()
        case 'checkOut':
            return checkOut()
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

export default reducer
export { initialState }