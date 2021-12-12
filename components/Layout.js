import Head from 'next/head'

// styles
import styles from '../styles/Layout.module.css'

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' description={description} />
        <meta name='keywords' keywords={keywords} />
      </Head>
      {/* header */}
      <header>
        <h1 style={{ textAlign: 'center' }}>Footer</h1>
      </header>
      {/* page content */}
      <div className={styles.container}>{children}</div>

      {/* footer */}
      <footer>
        <h1 style={{ textAlign: 'center' }}>Footer</h1>
      </footer>
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events.',
  keywords: 'music events, dj parties, night dj events',
}
