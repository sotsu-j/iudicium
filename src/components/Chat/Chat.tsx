import { useEffect } from 'react'

import { Typography } from '@material-ui/core'

import useAuth from '../Auth'
import ChannelSelector from './ChannelSelector'
import InputMessage from './InputMessage'
import Timeline from './Timeline'
import useChat from './useChat'

import { StyledMain, StyledSideActions } from './style'

const Chat = () => {
    const [state, dispatch] = useChat()
    const [currentUser] = useAuth()

    useEffect(() => {
        if (currentUser) {
            const { uid, displayName, photoURL } = currentUser
            dispatch({ type: 'setActiveUser', payload: { id: uid, name: displayName, photoURL: photoURL } })
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