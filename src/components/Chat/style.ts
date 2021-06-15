import styled from 'styled-components'


export const StyledSideActions = styled.div`
    ${({ theme }) => `
    display: flex;
    flex-direction: column;
    width: ${theme.spacing(20)}px;
    `}
`