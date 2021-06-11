import Head from 'next/head'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import AccountButton from '../components/auth/AccountButton'

const StyledAccountButton = styled(AccountButton)`
    margin-left: auto;
`

export default function Home() {

  return (
    <div>
      <Head>
        <title>IUDICIUM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="sticky" >
        <Toolbar variant="dense">
          <StyledAccountButton />
        </Toolbar>
      </AppBar>
      <main>
      </main>
    </div>
  )
}
