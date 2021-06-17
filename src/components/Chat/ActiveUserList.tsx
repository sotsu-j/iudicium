import { useState, useEffect } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import firebase from '../../Firebase'
import useChat from './useChat'
import AvatarIcon from '../AvatarIcon'

import { StyledActiveUserList } from './style'

const ActiveUserList: React.FC = () => {
    const [state, setState] = useState<User[] | null>(null)
    const [{ channel, tabID }] = useChat()
    const database = firebase.database()

    useEffect(() => {
        channel && database.ref(`users`).orderByChild(`connectedChannels/${channel.id}`).startAfter(false)
            .on('value', (snapshot) => {
                const data: User[] = snapshot.val()
                const users = data ? Object.entries(data).map(([key, value]) => ({ ...value, id: key })) : null
                console.log(data)
                setState(users)
            })
    }, [])

    return (
        <StyledActiveUserList>
            <List>
                {state && state.map(({ id, name }) => (
                    <ListItem key={id} dense>
                        <ListItemIcon>
                            <AvatarIcon uid={id} />
                        </ListItemIcon>
                        <ListItemText primary={name || "ゲスト"} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                ))}
            </List>
        </StyledActiveUserList>
    )
}

export default ActiveUserList