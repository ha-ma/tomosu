import Link from 'next/link';
import styles from './BottomContact.module.scss'

export default function ButtomContact() {
  return (
    <section className={styles.bottomContact}>
      <h2 className={styles.bottomContact__heading}>お問い合わせ</h2>
      <p className={styles.bottomContact__desc}>取材依頼・公園・ワークショップの企画のご相談などお気軽にご連絡ください。</p>
      <Link href="/contact" className={styles.bottomContact__link}>お問い合わせはこちら</Link>
    </section>
  )
}