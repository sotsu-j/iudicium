import React, { FC } from 'react'

import AvatarIcon, { AvatarIconProps } from '../../AvatarIcon'

const MessageAvatarIcon: FC<AvatarIconProps> = ({ uid, size = 6 }) => {
    return (
        <AvatarIcon uid={uid} size={size} />
    )
}

export default MessageAvatarIcon