import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Dennis'
export const siteTitle = 'Dennis Mamedov'

export default Layout => {
  return ({children: content}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="De blog van Dennis Mamedov" />
        <meta property="og:url" content="dennismamedov.info" />
        <meta property="og:image" content="https://i.imgur.com/sOwYhND.jpg" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
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
      </header>
        <div>
          <Link href="/">
            <a>← Home</a>
          </Link>
        </div>
      <main>{content}</main>
        <div>
          <Link href="/">
            <a>← Home</a>
          </Link>
        </div>
    </div>
    )
  }
}
