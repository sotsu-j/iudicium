import styled from 'styled-components'

import { Paper } from '@material-ui/core'

export const StyledMain = styled(Paper)`
    ${({ theme }) => `
    display: flex;
    flex-direction: row;
    margin: ${theme.spacing(.5)}px 0;
    padding: ${theme.spacing(2)}px;
    `}
`

export const StyledName = styled.div`
    ${({ theme }) => `
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    padding: ${theme.spacing(1)}px;
    `}
`

export const StyledAvatar = styled.div`
    ${({ theme }) => `
    display: flex;
    align-items: flex-start;
    margin: ${theme.spacing(.5)}px;
    `}
`

export const StyledMessage = styled.div`
    ${({ theme }) => `
    display: flex;
    align-items: flex-start;
    padding: 0 ${theme.spacing(2)}px;
    `}
`
