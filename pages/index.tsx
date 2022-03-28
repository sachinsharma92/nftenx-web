import { A, Seo } from 'components/atoms'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className='bg-primary'>
      <Seo title="Home"/>
      <A href="https://www.google.com">Join The Waitlist</A>
    </main>
  )
}

export default Home
