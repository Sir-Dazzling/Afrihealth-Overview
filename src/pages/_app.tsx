import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="./favicon.ico"
          type="image/x-icon"
        ></link>
        <link rel="icon" href="./favicon.ico" type="image/x-icon"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;