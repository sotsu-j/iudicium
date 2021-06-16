import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
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
    padding-top: 48px; #AppBarに潜らないための余白
`