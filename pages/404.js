import Layout from '../components/error'
import errorStyles from '../styles/error.module.css'
import { useRouter } from 'next/router'
export default function Custom404() {
    const router = useRouter();
    return (
        <Layout error>
            <div className={errorStyles.headingXXl}>
                <p>404</p>
            </div>
            <div className={errorStyles.headingMd}>
                <p>{router.asPath} page not found :(</p>
            </div>
        </Layout>
    )
}