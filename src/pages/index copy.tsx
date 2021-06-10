import { useContext } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import SignIn from '../components/auth/SignIn'
import { AuthContext } from '../components/auth/Auth'

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`

export default function Home() {
  const { currentUser } = useContext(AuthContext)

  return (
    <div>
      <Head>
        <title>IUDICIUM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Typography variant="h1" >
          Welcome to IUDICIUM
        </Typography>
        <Typography variant="body1" >
          {currentUser?.displayName}
          <img src={currentUser?.photoURL ?? ''} />
        </Typography>
        <div>
          <Button>TEST</Button>
          <StyledButton>TEST</StyledButton>
        </div>
        <div>
          <SignIn />
        </div>
      </main>
    </div>
  )
}
