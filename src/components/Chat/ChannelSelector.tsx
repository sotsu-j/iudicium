import { FC, useState, useEffect } from 'react'

import ListItem from '@material-ui/core/ListItem'

import firebase from '../../Firebase'
import useChat from './useChat'

const SelectChannel: FC = () => {
    const [{ channel }, dispatch] = useChat()
    const [channels, setChannels] = useState<Channel[]>([])
    const database = firebase.database()

    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const { id } = event.currentTarget
        const payload = channels.find((channel) => channel.id === id)
        dispatch({ type: 'checkIn', payload })
    }

    useEffect(() => {
        database.ref(`channels`).on('value', (snapshot) => {
            const data: Channel[] = snapshot.val()
            const __channels = Object.entries(data).map(([key, { name }]) => ({ id: key, name }))
            setChannels(__channels)
        })
    }, [])

    return (
        <div>
            {channels.map(({ id, name }) => {
                return <ListItem key={id} id={id} onClick={handleClick} selected={id === channel?.id} button>{name}</ListItem>
            })}
        </div>
    )
}

export default SelectChannel