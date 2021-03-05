import React from 'react'
import styles from '../../styles/about.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../components/PageHero'

function About() {
  return (
    <>
      <PageHero />
      <section className={styles.about}>
        <div className={styles.about__container}>
          <h2 className={styles.about__heading}>北海道のひがし「道東」から共に<br />未来を照らすアクションを起こそう。</h2>
          <div className={styles.about__concept}>
            <p className={styles.about__concept__desc}>コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。</p>
            <Image src="/images/logo_bk.png" quality={100} width={580} height={120} className={styles.about__concept__img} />
          </div>
          <div className={styles.about__able}>
            <h3 className={styles.about__able__heading}>私たちができること</h3>
            <ul className={styles.about__able__list}>
              <li className={styles.about__able__item}>
                <div className={styles.about__able__img}>
                  <Image src="/images/about/about1.png" quality={100} width={600} height={400} />
                </div>
                <div className={styles.about__able__detail}>
                  <h4 className={styles.about__able__detail__heading}>取材・記事の制作</h4>
                  <p className={styles.about__able__detail__desc}>コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。</p>
                </div>
              </li>
              <li className={styles.about__able__item}>
                <div className={styles.about__able__img}>
                  <Image src="/images/about/about2.png" quality={100} width={600} height={400} />
                </div>
                <div className={styles.about__able__detail}>
                  <h4 className={styles.about__able__detail__heading}>学校・企業での講演</h4>
                  <p className={styles.about__able__detail__desc}>コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。</p>
                </div>
              </li>
              <li className={styles.about__able__item}>
                <div className={styles.about__able__img}>
                  <Image src="/images/about/about3.png" quality={100} width={600} height={400} />
                </div>
                <div className={styles.about__able__detail}>
                  <h4 className={styles.about__able__detail__heading}>ワークショップの企画・運営</h4>
                  <p className={styles.about__able__detail__desc}>コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。</p>
                  <Link href="/">
                    <a className={styles.about__able__detail__link}>〉開催レポートを読む</a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.about__organization}>
            <div className={styles.about__organization__inner}>
              <h3 className={styles.about__organization__heading}>運営団体について</h3>
              <p className={styles.about__organization__desc}>コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。</p>
              <ul className={styles.about__organization__list}>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>団体名</dt>
                    <dd>道東SDGs推進協議会</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>所在地</dt>
                    <dd>□□□□□□□□□□□□□□□</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>設立日</dt>
                    <dd>□□□□□□□□□□□□□□□</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>代表者</dt>
                    <dd>□□□□□□□□□□□□□□□</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>連絡先</dt>
                    <dd>□□□□□□□□□□□□□□□</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>事業内容</dt>
                    <dd>□□□□□□□□□□□□□□□</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
