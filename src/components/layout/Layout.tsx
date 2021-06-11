import { FC } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import AccountButton from '../Auth/AccountButton'
import AppMenu from '../AppMenu'

interface Props {
    title?: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const StyledAccountButton = styled(AccountButton)`
    margin-left: auto;
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
                    <StyledAccountButton />
                </Toolbar>
            </AppBar>
            <Main>
                {children}
                <AppMenu />
            </Main>
        </Wrapper>
    )
}

export default Layout