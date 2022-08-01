import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'

import styles from './MainLayout.module.css'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Home - Jean Pierre</title>
          <meta name="description" content="Home Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default MainLayout
