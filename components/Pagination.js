import React from 'react'
import styles from './Pagination.module.scss'


function Pagination() {
  return (
    <div className={styles.Pagination}>
      <ul className={styles.Pagination__list}>
        <li className={[styles.Pagination__item, styles.first].join(' ')}>《　最初</li>
        <li className={[styles.Pagination__item, styles.prev].join(' ')}>〈</li>
        <li className={[styles.Pagination__item, styles.current].join(' ')}>1</li>
        <li className={styles.Pagination__item}>2</li>
        <li className={styles.Pagination__item}>3</li>
        <li className={[styles.Pagination__item, styles.ellipsis].join(' ')}>...</li>
        <li className={styles.Pagination__item}>10</li>
        <li className={[styles.Pagination__item, styles.next].join(' ')}>〉</li>
        <li className={[styles.Pagination__item, styles.last].join(' ')}>最後　》</li>
      </ul>
    </div>
  )
}

export default Pagination
