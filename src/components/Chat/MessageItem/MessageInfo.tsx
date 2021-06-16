import React, { FC } from 'react'

import { StyledName } from './style'

const MessageInfo: FC = ({ children }) => {
    return (
        <StyledName>{children}</StyledName>
    )
}

export default MessageInfo