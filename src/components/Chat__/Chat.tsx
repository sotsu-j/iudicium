import { useEffect } from 'react'

import firebase from '../../Firebase'
import useAuth from '../Auth__'
import SelectChannel from './SelectChannel'

const Chat = () => {
    const [currentUser] = useAuth()
    const database = firebase.database()

    useEffect(() => {
        if (currentUser) {
            database.ref(`users/${currentUser.uid}/name`).set(currentUser.displayName)
        }
    }, [])

    return <SelectChannel />
}

export default Chat