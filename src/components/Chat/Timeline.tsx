import { useEffect, useState } from 'react'
import { format } from 'date-fns'

import firebase from '../../Firebase'
import useChat from './useChat'
import MessageItem, { MessageInfo, MessageAvatarIcon } from './MessageItem'

const Timeline = () => {
    const [state, setState] = useState<Message[]>([])
    const [{ channel }] = useChat()
    const database = firebase.database()

    useEffect(() => {
        if (channel) {
            database.ref(`messages/${channel.id}`).orderByChild('timeline').limitToLast(10).on('value', (snapshot) => {
                const data: Message[] = snapshot.val()
                const __message: Message[] = Object.entries(data).map(([key, value]) => ({ ...value, id: key })).reverse()
                setState(__message)
            })
        }
    }, [channel])

    return (
        <>
            {state.map(({ id, message, user, timestamp }) => {
                return (
                    <MessageItem key={id} >
                        <MessageAvatarIcon uid={user.id} />
                        {message}
                        <MessageInfo>{user.name} ({format(timestamp, 'MM/dd HH:mm')})</MessageInfo>
                    </MessageItem>
                )
            })}
        </>
    )
}

export default Timeline