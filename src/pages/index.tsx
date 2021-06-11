import Head from 'next/head'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import AccountButton from '../components/auth/AccountButton'

const StyledAccountButton = styled(AccountButton)`
    margin-left: auto;
`

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export default function Home() {

  return (
    <>
      <Head>
        <title>IUDICIUM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="sticky" >
        <Toolbar variant="dense">
          <StyledAccountButton />
        </Toolbar>
      </AppBar>
      <Main>
        <Typography variant="h1" align="center">IUDICIUM</Typography>
      </Main>
    </>
  )
}
