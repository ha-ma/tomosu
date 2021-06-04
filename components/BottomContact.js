import Link from 'next/link';
import styles from './BottomContact.module.scss'

export default function ButtomContact() {
  return (
    <section className={styles.bottomContact}>
      <Link href="/contact">
        <a className={styles.bottomContact__link}>
          <h2 className={styles.bottomContact__heading}>お問い合わせ</h2>
          <p className={styles.bottomContact__desc}>取材依頼・講演・ワークショップの企画の<br />ご相談などお気軽にご連絡ください。</p>
        </a>
      </Link>
    </section>
  )
}