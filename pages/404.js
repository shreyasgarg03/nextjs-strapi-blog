import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'
// Layout
import Layout from '../components/Layout'

// Styles
import styles from '../styles/404.module.css'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <main className={styles.container}>
        <div className={styles.error}></div>
        <h1>
          <FaExclamationTriangle /> &nbsp; 404
        </h1>
        <h4>Are you lost ?</h4>
        <Link href='/'>Let's Go Back To Home</Link>
      </main>
    </Layout>
  )
}
