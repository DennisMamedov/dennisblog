import Link from 'next/link'
//import {frontMatter as blogsPages} from './*.mdx'
//import { frontMatter as introData } from './huh.mdx'
//import { frontMatter as advancedData } from './testing.mdx'
import {getSortedPosts} from '../../lib/posts'
import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'


export default function BlogsPage() {
    let blogsPages = getSortedPosts();
    return (
        <>
        <Layout home>
        <Head>
            <title>dennis mamedov blog</title>
        </Head>
            <section className={utilStyles.headingMd}>
                <p>Hoi, dit is mijn blog. Hier komt van alles wat ik interessant vind.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={`${utilStyles.list} ${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
    return p.replace(/\.md(x*)$/, '')
  }
