import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'

import { API_URL } from '@/config/index.js'

// Layout
import Layout from '@/components/Layout'

// css
import styles from '../../styles/Event.module.css'

export default function SlugPage({ evt }) {
  const deleteEvent = () => {
    console.log('delete the event')
  }
  return (
    <Layout title={evt.name}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href='#' className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
          <span style={{ marginLeft: 15 }}>
            {evt.date} at {evt.time}
          </span>
        </div>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} height={600} width={960} />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
        <Link href='/events'>
          <a className={styles.back}>{'<'}Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const evts = await res.json()
  return {
    props: {
      evt: evts[0],
    },
  }
}
