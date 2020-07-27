import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Dennis'
export const siteTitle = 'Dennis Mamedov'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="De blog van Dennis Mamedov" />
        <meta property="og:url" content="dennismamedov.info" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      {!home && (
        <div>
          <Link href="/">
            <a>← Home</a>
          </Link>
        </div>
      )}
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
