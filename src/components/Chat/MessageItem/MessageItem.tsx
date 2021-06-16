import React, { FC } from 'react'

import { MessageInfo, MessageAvatarIcon } from '.'

import { StyledMain, StyledAvatar, StyledMessage } from './style'

const MessageItem: FC = ({ children }) => {
    const childElements = React.Children.toArray(children)

    const elements = childElements.map(element => {
        switch (React.isValidElement(element) && element.type) {
            default: return <StyledMessage>{element}</StyledMessage>
            case MessageInfo: return element
            case MessageAvatarIcon: return (
                <StyledAvatar>{element}</StyledAvatar>
            )
        }
    })

    return (
        <StyledMain>{elements}</StyledMain>
    )
}

export default MessageItem