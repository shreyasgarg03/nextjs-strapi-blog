import Link from 'next/link'

// Styles
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright &copy;{' '}
        <a href='https://shubhamwebdesign.com'>shubhamwebdesign</a>: DJ Events
        2021
      </p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}
