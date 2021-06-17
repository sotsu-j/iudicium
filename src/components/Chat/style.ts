import styled from 'styled-components'

export const StyledMain = styled.div`
    ${({ theme }) => `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${theme.spacing(2)}px;
    `}
`

export const StyledSideActions = styled.div`
    ${({ theme }) => `
    display: flex;
    flex-direction: column;
    width: ${theme.spacing(42)}px;
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.dark};
    `}
`

export const StyledInputMassage = styled.div`
    display: flex;
    align-content: space-between;
    align-items: center;
`

export const StyledTimeline = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: scroll;
`

export const StyledActiveUserList = styled.div`
    display: flex;
    flex-direction: colmun;
    min-width: 280px;
    overflow: scroll;
`