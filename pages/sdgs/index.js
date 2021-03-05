import React from 'react'
import styles from '../../styles/sdgs.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../components/PageHero'
function Sdgs() {
  return (
    <>
      <PageHero />
      <section className={styles.sdgs}>
        <div className={styles.sdgs__container}>
          <h2 className={styles.sdgs__heading}>誰一人取り残さない世界を<br />共に実現していきませんか。</h2>
          <p className={styles.sdgs__desc}>コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。</p>

          <h2 className={styles.sdgs__heading}>世界みんなで目指す17個の目標。</h2>
          <p className={styles.sdgs__desc}>SDGs（持続可能な開発目標）とは、2015年9月の国連サミットで採択された「持続可能な開発のための2030アジェンダ」にて記載された2030年までに持続可能でよりよい世界を目指す国際目標です。17のゴールと169のターゲットから構成されており、地球上の「誰一人取り残さない（leave no one behind）」ことを誓っています。</p>
        </div>
        <div className={styles.sdgs__objective}>
          <ul className={styles.sdgs__objective__list}>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_01_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>01.</span> 貧困をなくそう</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_02_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>02.</span> 飢餓をゼロに</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_03_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>03.</span> すべての人に健康と福祉を</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_04_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>04.</span> 質の高い教育をみんなに</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_05_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>05.</span> ジェンダー平等を実現しよう</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_06_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>06.</span> 安全な水とトイレを世界中に</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_07_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>07.</span> エネルギーをみんなにそしてクリーンに</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_08_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>08.</span> 働きがいも経済成長も</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_09_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>09.</span> 産業と技術革新の基盤をつくろう</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_10_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>10.</span> 人や国の不平等をなくそう</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_11_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>11.</span> 住み続けられるまちづくりを</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_12_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>12.</span> つくる責任つかう責任</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_13_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>13.</span> 気候変動に具体的な対策を</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_14_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>14.</span> 海の豊かさを守ろう</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_15_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>15.</span> 陸の豊かさも守ろう</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_16_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>16.</span> 平和と公正をすべての人に</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  <Link href="/article">
                    <a className={styles.sdgs__objective__icon}>
                      <Image src="/images/icon/sdg_icon_17_ja.png" quality={100} width={1276} height={1276} className={styles.sdgs__objective__icon__img} />
                    </a>
                  </Link>
                  <h3 className={styles.sdgs__objective__heading}><span>17.</span> パートナーシップで目標を達成しよう</h3>
                </div>
                <p className={styles.sdgs__objective__desc}>簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。簡単な説明テキストなどは入ります。</p>
                <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Sdgs
