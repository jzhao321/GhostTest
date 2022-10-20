import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChangeEvent, useMemo, useState } from 'react';
import {
  QueryClient,
  Hydrate,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles.css';
import {
  AppBar,
  CssBaseline,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import '../public/locales/en/common.json';

import { ColorModeContext } from '../utils/darkMode.util';

interface PageProps {
  dehydratedState: unknown;
  _nextI18Next: SSRConfig['_nextI18Next'];
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f1f1f1',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function CustomApp({ Component, pageProps }: AppProps<PageProps>) {
  const [queryClient] = useState(() => new QueryClient());

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkMode(!darkMode);
      },
    }),
    [darkMode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <title>Welcome to ghost-test-frontend!</title>
            </Head>
            <main className="app">
              <Component {...pageProps} />
            </main>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default appWithTranslation<AppProps<PageProps>>(CustomApp);
