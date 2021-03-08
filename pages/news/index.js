import React from 'react'
import styles from '../../styles/news.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../components/PageHero'
import PagiNation from '../../components/pagination'

function NewsList() {
  return (
    <>
      <PageHero />
      <section className={styles.newslist}>
        <div className={styles.newslist__container}>
          <div className={styles.newslist__heading}>
            <h2 className={styles.newslist__heading__en}>News</h2>
            <p className={styles.newslist__heading__desc}>最新の情報をお知らせします。</p>
          </div>
          <div className={styles.newslist__listBlock}>
            <ul className={styles.newslist__list}>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.newslist__item}>
                <Link href="/news">
                  <a className={styles.newslist__link}>
                    <div className={styles.newslist__img}>
                      <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.newslist__category}>
                      <li className={styles.newslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.newslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.newslist__tag}>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.newslist__tag__item}>
                    <Link href="/"><a className={styles.newslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
            </ul>
            <PagiNation />
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsList