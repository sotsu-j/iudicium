import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import Layout from '../components/Layout__'

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export default function Home() {
  return (
    <Layout>
      <Main>
        <Typography variant="h1" align="center">IUDICIUM</Typography>
      </Main>
    </Layout>
  )
}
