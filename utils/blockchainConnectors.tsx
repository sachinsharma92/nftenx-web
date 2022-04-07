import { CHAINS } from 'components/connectors/metamask/chains'
import { Connectors } from 'web3-react'
const { InjectedConnector, NetworkOnlyConnector } = Connectors

const MetaMask = new InjectedConnector({ supportedNetworks: Object.keys(CHAINS) })

const Infura = new NetworkOnlyConnector({
    providerURL: CHAINS[parseInt(localStorage.getItem('chainId') ? localStorage.getItem('chainId') : 4)]
})

const connectors = { MetaMask, Infura }

export default connectors