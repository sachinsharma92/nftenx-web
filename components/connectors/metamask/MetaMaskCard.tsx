import { useEffect } from 'react'
import { hooks, metaMask } from './MetamaskConnector'
import { Accounts } from './Account'
import { Card } from './Card'
import { Chain } from './Chain'
import { ConnectWithSelect } from './ConnectWithSelect'
import { Status } from './Status'
import { useWeb3Context, } from 'web3-react'


const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function MetaMaskCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()
  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const context = useWeb3Context()


  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly()
    context.setFirstValidConnector(['MetaMask', 'Infura'])
  }, [])

  function invokeContract(){
    window.web3 = new Web3(window.ethereum);
  }

  return (
    <Card>
      <div>
        <b>MetaMask</b>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: '1rem' }} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: '1rem' }} />
      <ConnectWithSelect
        connector={metaMask}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
      <button onClick={invokeContract}>
      Do transaction
      </button>
    </Card>
  )
}
