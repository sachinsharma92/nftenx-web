import { A, Seo } from 'components/atoms'
import { Header, WithSidebar } from 'components/common'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className='bg-primary-1 min-h-screen'>
      <Seo title="Home"/>
      <WithSidebar>
        <Header />
      </WithSidebar>
    </main>
  )
}

export default Home
