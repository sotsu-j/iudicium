import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import styled from 'styled-components'

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../styles/theme'

import { AuthProvider } from '../components/auth/Auth'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <AuthProvider>
        <MaterialUIThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <Wrapper>
              <CssBaseline />
              <Component {...pageProps} />
            </Wrapper>
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </AuthProvider>
    </StylesProvider>
  );
};

export default MyApp