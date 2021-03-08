import React from 'react'
import styles from './PagiNation.module.scss'


function PagiNation() {
  return (
    <div className={styles.pagiNation}>
      <ul className={styles.pagiNation__list}>
        <li className={[styles.pagiNation__item, styles.first].join(' ')}>《　最初</li>
        <li className={[styles.pagiNation__item, styles.prev].join(' ')}>〈</li>
        <li className={[styles.pagiNation__item, styles.current].join(' ')}>1</li>
        <li className={styles.pagiNation__item}>2</li>
        <li className={styles.pagiNation__item}>3</li>
        <li className={[styles.pagiNation__item, styles.ellipsis].join(' ')}>...</li>
        <li className={styles.pagiNation__item}>10</li>
        <li className={[styles.pagiNation__item, styles.next].join(' ')}>〉</li>
        <li className={[styles.pagiNation__item, styles.last].join(' ')}>最後　》</li>
      </ul>
    </div>
  )
}

export default PagiNation
