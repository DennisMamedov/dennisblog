import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from './date'
const name = 'Dennis'
export const siteTitle = 'Dennis Mamedov'

export default function Layout(frontMatter) {
  return ({children: content}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.title} />
        <meta property="og:url" content="dennismamedov.info" />
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
          <Link href="/blog">
            <a>← Blog Index</a>
          </Link>
        </div>
        <article>
          <h1 className={utilStyles.headingXl}>{frontMatter.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={frontMatter.date} />
          </div>
        <main>{content}</main>
        </article>

        <div>
          <Link href="/blog">
            <a>← Blog Index</a>
          </Link>
        </div>
    </div>
    )
  }
}
