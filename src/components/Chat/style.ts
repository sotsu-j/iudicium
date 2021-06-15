import styled from 'styled-components'

export const StyledMain = styled.div`
    ${({ theme }) => `
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacing(2)}px;
    background-color: red;
    `}
`

export const StyledSideActions = styled.div`
    ${({ theme }) => `
    display: flex;
    flex-direction: column;
    width: ${theme.spacing(20)}px;
    `}
`

export const StyledInputMassage = styled.div`
    display: flex;
    align-content: space-between;
    align-items: center;
`