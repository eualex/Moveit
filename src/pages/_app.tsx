import React from 'react'

import { AppProps } from 'next/app'

import GlobalStyles from '../styles/global'
import Contexts from '../contexts'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Contexts>
        <Component {...pageProps} />
      </Contexts>
      <GlobalStyles />
    </>
  )
}

export default MyApp
