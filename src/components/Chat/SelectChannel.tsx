import { FC, useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'

import firebase from '../../Firebase'

interface channnel {
    id: string;
    name: string;
}

interface Props {
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const SelectChannel: FC<Props> = ({ onClick = () => { } }) => {
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
                return <MenuItem key={id} id={id} onClick={onClick}>{name}</MenuItem>
            })}
        </div>
    )
}

export default SelectChannel