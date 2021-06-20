import { useEffect } from 'react'

import { Typography } from '@material-ui/core'

import useAuth from '../Auth'
import ChannelSelector from './ChannelSelector'
import InputMessage from './InputMessage'
import Timeline from './Timeline'
import ActiveUserList from './ActiveUserList'
import useChat from './useChat'

import { StyledMain, StyledSideActions, StyledTimeline } from './style'

const Chat = () => {
    const [state, dispatch] = useChat()
    const [currentUser] = useAuth()

    useEffect(() => {
        if (currentUser) {
            const { uid, displayName, photoURL } = currentUser
            dispatch({ type: 'setActive', payload: { id: uid, name: displayName, photoURL: photoURL } })
        }

        window.addEventListener("beforeunload", () => dispatch({ type: 'inActive' }))

        return () => {
            dispatch({ type: 'inActive' })
            window.removeEventListener("beforeunload", () => dispatch({ type: 'inActive' }))
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
                <StyledTimeline>
                    <Timeline />
                </StyledTimeline>
            </StyledMain>
            <ActiveUserList />
        </>
    )
}

export default Chat