import Link from 'next/link'
import { API_URL } from '/config/index.js'

// import the layout
import Layout from '@/components/Layout'

// components
import EventItem from '@/components/EventItem'

export default function EeventsPage({ evts }) {
  console.log(evts)
  return (
    <Layout>
      <h1>All Events</h1>
      {evts.length === 0 && <h3>No Events To Show :( </h3>}

      {evts.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {evts.length > 0 && (
        <Link href='/'>
          <a className='btn-secondary'>View All Events</a>
        </Link>
      )}
    </Layout>
  )
}

// get data from server
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const evts = await res.json()
  return {
    props: { evts: evts.slice(0, 3) },
  }
}
