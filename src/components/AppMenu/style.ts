import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

export const StyledPaper = styled(Paper)`
    ${({ theme }) => `
    flex-grow: 1;
    display: flex;
    justify-content: center;
    min-width: ${theme.spacing(36)}px;
    margin: ${theme.spacing(2)}px;
    border-radius: 1em;
    `}
`