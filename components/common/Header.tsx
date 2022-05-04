import { Logo, MenuSecondary } from "assets/icons";
import { WalletConnectModal } from "components/walletConnectModal/walletConnectModal";
import { METAMASK_CONSTANTS } from "constants/globalConstants";
import { extraLinks, navLinks } from "constants/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import { storage } from "utils/storage";
import { formatAccount } from "utils/tokenMint";
import { hooks } from '../connectors/metamask/MetamaskConnector';

export const Header = () => {
  const router = useRouter();
  const activeRoute = router.pathname.split("/")[1];
  const [showWalletConnectModal, setShowWalletConnectModal] = useState<Boolean | undefined>(false)
  const [account, setAccount] = useState<string>('');
  const { useAccounts } = hooks;
  const accounts = useAccounts()

  const connectWalletHandler = ()=>{
    setShowWalletConnectModal(true)
  }
  // const headerBg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(accounts){
      setAccount(accounts[0]);
    }
  }, [accounts]);

  useEffect(() => {
    const metamaskAddr = storage.get(METAMASK_CONSTANTS.ADDRESS);
    if(metamaskAddr){
      setAccount(metamaskAddr);
    }
  }, []);

  const linkPaddings = 'px-4 py-2 xl:px-6 xl:py-3';

  return (
    <header className="w-full z-[100] text-secondary px-section py-5 flex flex-row justify-between items-center fixed top-0 text-lg">
      <Logo className="block lg:hidden w-12 h-auto" />
      <button className="block lg:hidden"><MenuSecondary /></button>
      <nav className="hidden lg:block rounded-full bg-secondary-3 bg-opacity-10 backdrop-blur-md overflow-hidden z-[100]">
        <ul className="list-none flex flex-row gap-2">
          {navLinks.map((element, index) => {
            return (
              <li key={index} className="inline-block">
                <Link passHref href={element.href ?? "javascript.void(0)"}>
                  <a
                    className={`${linkPaddings} text-secondary-1 transition-all ${
                      element.href.replace("/", "") != activeRoute
                        ? "opacity-50"
                        : ""
                    } hover:bg-primary-1 bg-opacity-40 hover:opacity-100 inline-block`}
                  >
                    {element.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="hidden lg:flex list-none flex-row gap-2 z=[1]">
        {extraLinks.map((element, index) => {
          return (
            <li key={index} className="inline-block">
              <Link passHref href={element.href ?? "javascript.void(0)"}>
                <a
                  className={`${linkPaddings} text-secondary-1 bg-secondary-3 bg-opacity-10 rounded-full inline-block backdrop-blur-md font-mono`}
                >
                  {element.title}
                </a>
              </Link>
            </li>
          );
        })}
        <li className="inline-block">
          <button
            onClick={account? ()=>null: connectWalletHandler}
            className="px-4 py-2 xl:px-6 xl:py-3 text-secondary-1 bg-secondary-3 bg-opacity-10 rounded-full inline-block backdrop-blur-md font-mono"
          >
            {formatAccount(account) || 'Connect Wallet'}
          </button>
        </li>
      </ul>

      <WalletConnectModal setShowModal={setShowWalletConnectModal} showModal={showWalletConnectModal}  />
    </header>
  );
};
