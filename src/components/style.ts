import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'

export const StyledAvatar = styled(Avatar)<{ size?: number }>`
    ${({ theme, size = 4 }) => `
    width: ${theme.spacing(size)}px;
    height: ${theme.spacing(size)}px;
    `}
`
