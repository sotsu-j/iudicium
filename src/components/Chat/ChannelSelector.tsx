import { FC, useState, useEffect } from 'react'

import ListItem from '@material-ui/core/ListItem'

import firebase from '../../Firebase'
import useChat from './useChat'

const SelectChannel: FC = () => {
    const [, dispatch] = useChat()
    const [channels, setChannels] = useState<channel[]>([])
    const database = firebase.database()

    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const { id } = event.currentTarget
        const payload = channels.find((channel) => channel.id === id)
        dispatch({ type: 'checkIn', payload })
    }

    useEffect(() => {
        database.ref(`channels`).on('value', (snapshot) => {
            const data: channel[] = snapshot.val()
            const __channels = Object.entries(data).map(([key, { name }]) => ({ id: key, name }))
            setChannels(__channels)
        })
    }, [])

    return (
        <div>
            {channels.map(({ id, name }, index) => {
                return <ListItem key={id} id={id} onClick={handleClick} button>{name}</ListItem>
            })}
        </div>
    )
}

export default SelectChannel