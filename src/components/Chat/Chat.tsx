import { useEffect } from 'react'

import firebase from '../../Firebase'
import useAuth from '../Auth'
import SelectChannel from './SelectChannel'
import useChat from './useChat'

const Chat = () => {
    const { state, dispatch } = useChat()
    const [currentUser] = useAuth()
    const database = firebase.database()

    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const channel = event.currentTarget.id
        dispatch({ type: 'checkIn', payload: channel })
    }

    useEffect(() => {
        if (currentUser) {
            database.ref(`users/${currentUser.uid}/name`).set(currentUser.displayName)
        }
    }, [])

    return (
        <>
            <SelectChannel onClick={handleClick} />
            <div>{state.channel}</div>
        </>
    )
}

export default Chat