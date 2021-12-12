import { useRouter } from 'next/router'
import Link from 'next/link'

// Layout
import Layout from '../../components/Layout'

export default function SlugPage() {
  const router = useRouter()
  const eventID = router.query.slug

  return (
    <Layout title={`DJ Event ${eventID}`}>
      <h1>My Event - {eventID} </h1>
    </Layout>
  )
}
