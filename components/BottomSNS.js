import React from 'react'
import Link from 'next/link'
import styles from './BottomSNS.module.scss'
import Image from 'next/image'

function BottomSNS() {
  return (
    <section className={styles.bottomSns}>
      <div className={styles.bottomSns__container}>
        <h2 className={styles.bottomSns__heading}>Follow us</h2>
        <ul className={styles.bottomSns__list}>
          <li className={styles.bottomSns__item}>
            <Link href="">
              <a target="_blank" className={styles.bottomSns__link}>
                <Image src='/images/icon/icon_fb_gr.png' quality={100} width={75} height={150} className={styles.bottomSns__icon} />
              </a>
            </Link>
          </li>
          <li className={styles.bottomSns__item}>
            <Link href="">
              <a target="_blank" className={styles.bottomSns__link}>
                <Image src='/images/icon/icon_tw_gr.png' quality={100} width={150} height={120} className={styles.bottomSns__icon} />
              </a>
            </Link>
          </li>
        </ul>
        <p className={styles.bottomSns__desc}>SNSでも情報発信中です! <br className={styles.bottomSns__newLine}/>ぜひフォローしてみてください。</p>
      </div>
    </section>
  )
}

export default BottomSNS
