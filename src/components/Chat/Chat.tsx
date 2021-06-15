import { useEffect } from 'react'

import { Typography } from '@material-ui/core'

import firebase from '../../Firebase'
import useAuth from '../Auth'
import ChannelSelector from './ChannelSelector'
import InputMessage from './InputMessage'
import Timeline from './Timeline'
import useChat from './useChat'

import { StyledMain, StyledSideActions } from './style'

const Chat = () => {
    const [state, dispatch] = useChat()
    const [currentUser] = useAuth()
    const database = firebase.database()

    useEffect(() => {
        if (currentUser) {
            const { uid, displayName } = currentUser
            dispatch({ type: 'setActiveUser', payload: { uid, displayName } })
            database.ref(`users/${currentUser.uid}/name`).set(displayName)
        } else {
            dispatch({ type: 'setActiveUser', payload: null })
        }
    }, [currentUser])

    return (
        <>
            <StyledSideActions>
                <ChannelSelector />
            </StyledSideActions>
            <StyledMain>
                <Typography variant="h4">{state.channel?.name}</Typography>
                <InputMessage />
                <Timeline />
            </StyledMain>
        </>
    )
}

export default Chat