import { FC } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import AccountButton from '../Auth__/AccountButton'
import AppMenuButton from '../AppMenu__/AppMenuButton'

interface Props {
    title?: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Actions = styled.div`
    ${({ theme }) => `
    display: flex;
    align-items: center;
    margin-left: auto;
    & > :nth-child(n+2) {
        margin-left: ${theme.spacing(2)}px;
    }
    `}
`

const Main = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
`

const Layout: FC<Props> = ({ title, children }) => {

    return (
        <Wrapper>
            <Head>
                <title>{title && `${title} | `}IUDICIUM</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppBar position="sticky" >
                <Toolbar variant="dense">
                    <Actions>
                        <AppMenuButton />
                        <AccountButton />
                    </Actions>
                </Toolbar>
            </AppBar>
            <Main>
                {children}
            </Main>
        </Wrapper>
    )
}

export default Layout