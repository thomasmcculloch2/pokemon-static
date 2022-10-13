import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';

import { createTheme } from "@nextui-org/react"

const darktTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, 
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme = {darktTheme}>
      <Component {...pageProps} />
    </NextUIProvider>  )
}

export default MyApp
