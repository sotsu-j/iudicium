import { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography'

import firebase from '../../Firebase'

interface channnel {
    id: string;
    name: string;
}

const SelectChannel = () => {
    const [channels, setChannels] = useState<channnel[]>([])
    const database = firebase.database()

    useEffect(() => {
        database.ref(`channels`).on('value', (snapshot) => {
            const data: channnel[] = snapshot.val()
            const __channels = Object.entries(data).map(([key, { name }]) => ({ id: key, name }))
            setChannels(__channels)
        })
    }, [])

    return (
        <div>
            {channels.map(({ id, name }) => {
                return <Typography>{name}</Typography>
            })}
        </div>
    )
}

export default SelectChannel