import { useEffect } from 'react'

import { Typography } from '@material-ui/core'

import firebase from '../../Firebase'
import useAuth from '../Auth'
import ChannelSelector from './ChannelSelector'
import useChat from './useChat'

import { StyledSideActions } from './style'

const Chat = () => {
    const [state]  = useChat()
    const [currentUser] = useAuth()
    const database = firebase.database()


    useEffect(() => {
        if (currentUser) {
            database.ref(`users/${currentUser.uid}/name`).set(currentUser.displayName)
        }
    }, [])

    return (
        <>
            <StyledSideActions>
                <ChannelSelector />
            </StyledSideActions>
            <div>
                <Typography variant="h4">{state.channel?.name}</Typography>
            </div>
        </>
    )
}

export default Chat