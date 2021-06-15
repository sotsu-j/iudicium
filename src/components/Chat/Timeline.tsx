import { useEffect, useState } from 'react'

import firebase from '../../Firebase'
import useChat from './useChat'


const Timeline = () => {
    const [state, setState] = useState<Message[]>([])
    const [{ channel }] = useChat()
    const database = firebase.database()

    useEffect(() => {
        if (channel) {
            database.ref(`messages/${channel.id}`).on('value', (snapshot) => {
                const data: Message[] = snapshot.val()
                const __message: Message[] = Object.entries(data).map(([key, value]) => ({ ...value, id: key }))
                setState(__message)
                console.log(__message)
            })
        }
    }, [channel])

    return (
        <>
            {state.map(({ message }, index) => {
                return (
                    <div key={index}>{message}</div>
                )
            })}
        </>
    )
}

export default Timeline