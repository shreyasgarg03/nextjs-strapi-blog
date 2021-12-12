import { useRouter } from 'next/router'
import Link from 'next/link'

import { API_URL } from '@/config/index.js'

// Layout
import Layout from '../../components/Layout'

export default function SlugPage({ evt }) {
  return (
    <Layout title={evt.name}>
      <h1>{evt.name}</h1>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const evts = await res.json()
  return {
    props: evts[0],
  }
}
