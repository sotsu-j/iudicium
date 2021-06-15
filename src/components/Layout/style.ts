import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const StyledActions = styled.div`
    ${({ theme }) => `
    display: flex;
    align-items: center;
    margin-left: auto;
    & > :nth-child(n+2) {
        margin-left: ${theme.spacing(2)}px;
    }
    `}
`

export const StyledMain = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
`