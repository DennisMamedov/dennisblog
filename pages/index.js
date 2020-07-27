import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hoi, ik ben <span style={{fontWeight: "bold"}}>dennis mamedov</span>. Op deze website gooi ik van alles wat heeft te maken met mij.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </ul>
      </section>
    </Layout>
  )
}
