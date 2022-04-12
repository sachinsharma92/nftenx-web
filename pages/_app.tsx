import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Web3Provider from 'web3-react'
import connectors from '../utils/blockchainConnectors'

function MyApp({ Component, pageProps }: AppProps) {
  return (<Web3Provider connectors={connectors} libraryName="ethers.js"  >
  <Component {...pageProps} />
  </Web3Provider>)
}

export default MyApp
