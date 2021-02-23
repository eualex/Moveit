import GlobalStyles from '../styles/global'
import { AppProps } from 'next/app'

const MyApp: React.FC<AppProps>  = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
