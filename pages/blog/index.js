import Link from 'next/link'
//import {frontMatter as blogsPages} from './*.mdx'
import { frontMatter as introData } from './huh.mdx'
import { frontMatter as advancedData } from './testing.mdx'
import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'


export default function BlogsPage() {
    let blogsPages = [introData, advancedData];
    return (
        <>
        <Layout home>
            <Head>
                <title>dennis mamedov blog</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hoi, ik ben <span style={{fontWeight: "bold"}}>dennis mamedov</span>. Op deze website gooi ik van alles wat heeft te maken met mij.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul>
                    {blogsPages.map((page) => (
                        <li className={utilStyles.listItem} key={page.__resourcePath}>
                            <Link href={formatPath(page.__resourcePath)}>
                                <a>{page.title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                            <Date dateString={page.date} />
                            <span style={{float: "right"}}>{page.pinned ? "pinned" : ""}</span>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
    </Layout>
        </>
    )
}
function formatPath(p) {
    return p.replace(/\.mdx$/, '')
  }