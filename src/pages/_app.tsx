import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../shared/styles/theme';

import '../shared/styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
