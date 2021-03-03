import React from 'react'
import Link from 'next/link'
import styles from './GlobalNav.module.scss'
import Image from 'next/image'

function GlobalNav() {
  return (
    <aside className={styles.globalNav}>
      <div className={styles.globalNav__container}>
        <div className={styles.globalNav__logo}>
          <p className={styles.globalNav__logo__catch}>道東の未来を灯す<br />SDGsマガジン</p>
          <Image src='/images/logo.png' quality={100} width={631} height={227} className={styles.globalNav__logo__img} />
        </div>
        <nav className={styles.globalNav__nav}>
          <ul className={styles.globalNav__list}>
            <li className={styles.globalNav__item}>
              <Link href="/articles">
                <a className={styles.globalNav__link}>記事一覧</a>
              </Link>
            </li>
            <li className={styles.globalNav__item}>
              <Link href="/about">
                <a className={styles.globalNav__link}>私たちのこと</a>
              </Link>
            </li>
            <li className={styles.globalNav__item}>
              <Link href="/sdgs">
                <a className={styles.globalNav__link}>SDGsについて</a>
              </Link>
            </li>
          </ul>
        </nav>
        <dl className={styles.globalNav__keyword}>
          <dt>キーワードから読む</dt>
          <dd>
            <ul className={styles.globalNav__keyword__list}>
              <li className={styles.globalNav__keyword__item}>
                <Link href="/article">
                  <a className={styles.globalNav__keyword__link}>#ハッシュタグ</a>
                </Link>
              </li>
              <li className={styles.globalNav__keyword__item}>
                <Link href="/article">
                  <a className={styles.globalNav__keyword__link}>#ハッシュタグ</a>
                </Link>
              </li>
              <li className={styles.globalNav__keyword__item}>
                <Link href="/article">
                  <a className={styles.globalNav__keyword__link}>#ハッシュタグ</a>
                </Link>
              </li>
              <li className={styles.globalNav__keyword__item}>
                <Link href="/article">
                  <a className={styles.globalNav__keyword__link}>#ハッシュタグ</a>
                </Link>
              </li>
              <li className={styles.globalNav__keyword__item}>
                <Link href="/article">
                  <a className={styles.globalNav__keyword__link}>#ハッシュタグ</a>
                </Link>
              </li>
              <li className={styles.globalNav__keyword__item}>
                <Link href="/article">
                  <a className={styles.globalNav__keyword__link}>#ハッシュタグ</a>
                </Link>
              </li>
            </ul>
          </dd>
        </dl>
        <div className={styles.globalNav__bottomMenu}>
          <ul className={styles.globalNav__bottomMenu__list}>
            <li className={styles.globalNav__bottomMenu__item}>
              <Link href="/contact">
                <a className={styles.globalNav__bottomMenu__link}>〉お問い合わせ</a>
              </Link>
            </li>
            <li className={styles.globalNav__bottomMenu__item}>
              <Link href="/news">
                <a className={styles.globalNav__bottomMenu__link}>〉お知らせ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default GlobalNav
