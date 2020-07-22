import Head from 'next/head'
import styles from './error.module.css'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Dennis" />
        <meta property="og:description" content="De blog van Dennis Mamedov" />
        <meta property="og:url" content="dennismamedov.info" />
        <meta property="og:image" content="https://i.imgur.com/sOwYhND.jpg" />
      </Head>
      <main>{children}</main>
    </div>
  )
}