import Head from 'next/head';
import { AppProps } from 'next/app';

import theme from '../styles/theme';

import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IP Tracker</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
