import { FC } from 'react'
import Head from 'next/head'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import AccountButton from '../Auth/AccountButton'
import AppMenuButton from '../AppMenu/AppMenuButton'

import { StyledWrapper, StyledActions, StyledMain } from './style'

interface LayoutProps {
    title?: string;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (
        <StyledWrapper>
            <Head>
                <title>{title && `${title} | `}IUDICIUM</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppBar position="sticky" >
                <Toolbar variant="dense">
                    <StyledActions>
                        <AppMenuButton />
                        <AccountButton />
                    </StyledActions>
                </Toolbar>
            </AppBar>
            <StyledMain>
                {children}
            </StyledMain>
        </StyledWrapper>
    )
}

export default Layout