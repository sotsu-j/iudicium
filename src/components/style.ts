import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'

import { AvatarIconProps } from './AvatarIcon'

export const StyledAvatar = styled(Avatar)<AvatarIconProps>`
    ${({ theme, size = 4, color }) => `
    width: ${theme.spacing(size)}px;
    height: ${theme.spacing(size)}px;
    background-color: ${color};
    `}
`
