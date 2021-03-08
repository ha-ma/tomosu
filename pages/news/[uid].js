import React from 'react'
import styles from '../../styles/news.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../components/PageHero'

function News() {
  return (
    <>
      <PageHero />
      <section className={styles.newsdetail}>
        <div className={styles.newsdetail__container}>
          <div className={styles.newsdetail__heading}>
            <div className={styles.newsdetail__heading__top}>
              <p className={styles.newsdetail__heading__category}>News</p>
              <p className={styles.newsdetail__heading__time}>2021.04.01</p>
            </div>
            <h1 className={styles.newsdetail__heading__title}>webサイトを更新しました。webサイトを更新しました。webサイトを更新しました。webサイトを更新しました。</h1>
            <div className={styles.newsdetail__heading__bottom}>
              <ul className={styles.newsdetail__heading__hashList}>
                <li className={styles.newsdetail__heading__hashItem}>
                  <Link href="/">
                    <a className={styles.newsdetail__heading__hashLink}>#ハッシュタグ</a>
                  </Link>
                </li>
                <li className={styles.newsdetail__heading__hashItem}>
                  <Link href="/">
                    <a className={styles.newsdetail__heading__hashLink}>#ハッシュタグ</a>
                  </Link>
                </li>
                <li className={styles.newsdetail__heading__hashItem}>
                  <Link href="/">
                    <a className={styles.newsdetail__heading__hashLink}>#ハッシュタグ</a>
                  </Link>
                </li>
                <li className={styles.newsdetail__heading__hashItem}>
                  <Link href="/">
                    <a className={styles.newsdetail__heading__hashLink}>#ハッシュタグ</a>
                  </Link>
                </li>
              </ul>
              <ul className={styles.newsdetail__heading__snsList}>
                <li className={styles.newsdetail__heading__snsItem}>
                  <Link href="/">
                    <a className={styles.newsdetail__heading__snsLink}>
                      <div className={styles.newsdetail__heading__snsImg}>
                        <Image src="/images/icon/icon_fb_gr.png" quality={100} width={75} height={150} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={styles.newsdetail__heading__snsItem}>
                  <Link href="/">
                    <a className={styles.newsdetail__heading__snsLink}>
                      <div className={styles.newsdetail__heading__snsImg}>
                        <Image src="/images/icon/icon_tw_gr.png" quality={100} width={150} height={120} />
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.newsdetail__content}>
            <h2>取材依頼・ワークショップ情報おまちしております。</h2>
            <br /><br /><br />
            <Image src="/images/sample_news_image.png" quality={100} width={1236} height={655} />
            <br /><br /><br /><br /><br />
            <h3>―道東SDGsの活動ついて教えてください。道東SDGsの活動ついて教えてください。道東SDGsの活動ついて教えてください。</h3>
            <br /><br />
            <p>本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。</p>
            <br /><br /><br /><br /><br />
            <h3>―道東SDGsの活動ついて教えてください。道東SDGsの活動ついて教えてください。道東SDGsの活動ついて教えてください。</h3>
            <br /><br />
            <p>本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。本文テキスト入ります。</p>
          </div>
          <div className={styles.newsdetail__content__link}>
            <Link href="/news">
              <a>〉お知らせ一覧にもどる</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default News