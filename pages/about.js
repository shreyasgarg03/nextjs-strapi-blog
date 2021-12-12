import Link from 'next/link'

// Layout
import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title='DJ Events Blog'>
      <h1>About Page!!</h1>
      <p>This is an app to find the dj and other musical events.</p>
      <Link href='/'>Home</Link>
    </Layout>
  )
}
