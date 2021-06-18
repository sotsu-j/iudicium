import { useState, useEffect } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import firebase from '../../Firebase'
import useChat from './useChat'
import AvatarIcon from '../AvatarIcon'

import { StyledActiveUserList } from './style'

type StateType = User[] | null

const ActiveUserList: React.FC = () => {
    const [state, setState] = useState<StateType>(null)
    const [{ channel }] = useChat()
    const database = firebase.database()

    useEffect(() => {
        let dispatchSafe = (users: StateType) => setState(users)

        channel && database.ref(`sessions`).orderByChild(`connectedChannelID`).equalTo(channel.id)
            .on('value', (snapshot) => {
                const data: { user: User }[] = snapshot.val()
                const users = data
                    ? Object.values(data)
                        .map((session) => session.user)
                        .filter(({ id }, index, self) => self.findIndex(v => v.id === id) == index)
                    : null
                dispatchSafe(users)
            })
        return () => {
            dispatchSafe = () => { }
            database.ref(`sessions`).off()
        }
    }, [channel])

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