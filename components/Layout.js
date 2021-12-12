import Head from 'next/head'
import { useRouter } from 'next/router'
// styles
import styles from '../styles/Layout.module.css'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from './Showcase'

export default function Layout({ title, description, keywords, children }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' description={description} />
        <meta name='keywords' keywords={keywords} />
      </Head>
      {/* header */}
      <Header />
      {/* showcase */}
      {router.pathName === '/' && <Showcase />}
      {/* page content */}
      <div className={styles.container}>{children}</div>

      {/* footer */}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events.',
  keywords: 'music events, dj parties, night dj events',
}
