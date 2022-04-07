import { CHAINS } from 'components/connectors/metamask/chains'
import { METAMASK_CONSTANTS } from 'constants/globalConstants'
import { Connectors } from 'web3-react'
import { storage } from './storage'
const { InjectedConnector, NetworkOnlyConnector } = Connectors
const MetaMask = new InjectedConnector({ supportedNetworks: Object.keys(CHAINS) })


const getChainId=()=>{
    if (typeof window !== 'undefined') {
        return storage.get(METAMASK_CONSTANTS.CHAIN_ID) || '4';
    }
    return '4';
}

const Infura = new NetworkOnlyConnector({
    providerURL: CHAINS[parseInt(getChainId())]
})

const connectors = { MetaMask, Infura }

export default connectors