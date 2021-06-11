import { useEffect } from 'react'

import firebase from '../../Firebase'
import useUser from '../Auth'
import SelectChannel from './SelectChannel'

const Chat = () => {
    const [currentUser] = useUser()
    const database = firebase.database()

    useEffect(() => {
        if (currentUser) {
            database.ref(`users/${currentUser.uid}/name`).set(currentUser.displayName)
        }
    }, [])

    return <SelectChannel />
}

export default Chat