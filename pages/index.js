import 'intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import Slide from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import InViewMonitor from "react-inview-monitor"
import 'animate.css/animate.css'

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: ['slick-dots', styles.home__slide__dot].join(' '),
    customPaging: i => (
      <div className={styles.home__slide__dotItem}>{(i + 1).toString().padStart(2, '0')}</div>
    )
  };
  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        {/* slide */}
        <div className={styles.home__slide}>
          <Slide {...settings}>
            <div className={styles.home__slide__item}>
              <Link href="articles/">
                <a className={styles.home__slide__link}>
                  <div className={styles.home__slide__img} style={{backgroundImage: 'url(/images/hero/top.png)'}}></div>
                  <div className={styles.home__slide__heading}>
                    <p className={styles.home__slide__category}>セクション名</p>
                    <p className={styles.home__slide__title}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.home__slide__item}>
              <Link href="articles/">
                <a className={styles.home__slide__link}>
                  <div className={styles.home__slide__img} style={{backgroundImage: 'url(/images/hero/top.png)'}}></div>
                  <div className={styles.home__slide__heading}>
                    <p className={styles.home__slide__category}>セクション名</p>
                    <p className={styles.home__slide__title}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.home__slide__item}>
              <Link href="articles/">
                <a className={styles.home__slide__link}>
                  <div className={styles.home__slide__img} style={{backgroundImage: 'url(/images/hero/top.png)'}}></div>
                  <div className={styles.home__slide__heading}>
                    <p className={styles.home__slide__category}>セクション名</p>
                    <p className={styles.home__slide__title}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</p>
                  </div>
                </a>
              </Link>
            </div>
          </Slide>
        </div>
        {/* Magazine */}
        <div className={styles.home__articles}>
          <InViewMonitor
            classNameNotInView={styles.visHidden}
            classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
            <div className={styles.home__heading}>
              <h2 className={styles.home__heading__en}>Magazine</h2>
              <p className={styles.home__heading__desc}>道東の未来を灯す、ヒトコトモノをご紹介。</p>
            </div>
          </InViewMonitor>
          <div className={styles.home__articles__listBlock}>
            <ul className={styles.home__articles__list}>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <div className={styles.home__articles__img}>
                        <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                      </div>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <ul className={styles.home__articles__category}>
                        <li className={styles.home__articles__category__item}>セクション名</li>
                      </ul>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                    </InViewMonitor>
                  </a>
                </Link>
                <InViewMonitor
                  classNameNotInView={styles.visHidden}
                  classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                  <ul className={styles.home__articles__tag}>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                  </ul>
                </InViewMonitor>
              </li>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <div className={styles.home__articles__img}>
                        <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                      </div>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <ul className={styles.home__articles__category}>
                        <li className={styles.home__articles__category__item}>セクション名</li>
                      </ul>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                    </InViewMonitor>
                  </a>
                </Link>
                <InViewMonitor
                  classNameNotInView={styles.visHidden}
                  classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                  <ul className={styles.home__articles__tag}>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                  </ul>
                </InViewMonitor>
              </li>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <div className={styles.home__articles__img}>
                        <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                      </div>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <ul className={styles.home__articles__category}>
                        <li className={styles.home__articles__category__item}>セクション名</li>
                      </ul>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                    </InViewMonitor>
                  </a>
                </Link>
                <InViewMonitor
                  classNameNotInView={styles.visHidden}
                  classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                  <ul className={styles.home__articles__tag}>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                  </ul>
                </InViewMonitor>
              </li>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <div className={styles.home__articles__img}>
                        <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                      </div>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <ul className={styles.home__articles__category}>
                        <li className={styles.home__articles__category__item}>セクション名</li>
                      </ul>
                    </InViewMonitor>
                    <InViewMonitor
                      classNameNotInView={styles.visHidden}
                      classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                      <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                    </InViewMonitor>
                  </a>
                </Link>
                <InViewMonitor
                  classNameNotInView={styles.visHidden}
                  classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                  <ul className={styles.home__articles__tag}>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                    <li className={styles.home__articles__tag__item}>
                      <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                    </li>
                  </ul>
                </InViewMonitor>
              </li>
            </ul>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <Link href="/articles">
                <a className={styles.home__articles__listLink}>記事一覧へ</a>
              </Link>
            </InViewMonitor>
          </div>
        </div>
        
        {/* What We Do */}
        <div className={styles.home__about}>
          <InViewMonitor
            classNameNotInView={styles.visHidden}
            classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
            <div className={[styles.home__heading, styles.aboutHeading].join(' ')}>
              <h2 className={[styles.home__heading__en, styles.aboutHeading__en].join(' ')}>What We Do</h2>
              <p className={styles.home__heading__desc}>わたしたちと、皆さんと一緒にできること。</p>
            </div>
          </InViewMonitor>
          <InViewMonitor
            classNameNotInView={styles.visHidden}
            classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
            <div className={styles.home__about__img}>
              <Image src="/images/top/top_about.png" quality={100} width={1256} height={675} />
            </div>
          </InViewMonitor>
          <div className={styles.home__about__detail}>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <h3 className={styles.home__about__detail__heading}>私たちのこと</h3>
            </InViewMonitor>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <p className={styles.home__about__detail__desc}>tomosuは道東SDGs協議会が運営するオンラインマガジンです。私たちは道東エリアの取材発信のほかワークショップや講演などの取り組みにも力をいれています。</p>
            </InViewMonitor>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <Link href="/about">
                <a className={styles.home__about__detail__link}>詳しく見る</a>
              </Link>
            </InViewMonitor>
          </div>
        </div>

        {/* About SDGs */}
        <div className={styles.home__sdgs}>
          <InViewMonitor
            classNameNotInView={styles.visHidden}
            classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
            <div className={[styles.home__heading, styles.sdgsHeading].join(' ')}>
              <h2 className={styles.home__heading__en}>About SDGs</h2>
              <p className={styles.home__heading__desc}>身近なことからアクションを起こそう！</p>
            </div>
          </InViewMonitor>
          <InViewMonitor
            classNameNotInView={styles.visHidden}
            classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
            <div className={styles.home__sdgs__img}>
              <Image src="/images/top/top_sdgs.png" quality={100} width={1256} height={675} />
            </div>
          </InViewMonitor>
          <div className={styles.home__sdgs__detail}>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <h3 className={styles.home__sdgs__detail__heading}>SDGsについて</h3>
            </InViewMonitor>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <p className={styles.home__sdgs__detail__desc}>SDGsって最近よく耳にするけど一体なんだろう。どういうことをすればいいの？そんな疑問をわかりやすく解説しています。一緒に身近なことから始めませんか？</p>
            </InViewMonitor>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <Link href="/sdgs">
                <a className={styles.home__sdgs__detail__link}>詳しく見る</a>
              </Link>
            </InViewMonitor>
          </div>
        </div>

        {/* News */}
        <div className={styles.home__news}>
          <div  className={[styles.home__heading, styles.newsHeading].join(' ')}>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <h2 className={styles.home__heading__en}>News</h2>
            </InViewMonitor>
          </div>
          <div className={styles.home__news__listBlock}>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <Link href="/news"><a className={[styles.home__news__listLink, styles.home__news__listLink__pc].join(' ')}>〉お知らせ一覧へ</a></Link>
            </InViewMonitor>
            <ul className={styles.home__news__list}>
              <li className={styles.home__news__item}>
                <InViewMonitor
                  classNameNotInView={styles.visHidden}
                  classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                  <Link href="/news">
                    <a className={styles.home__news__link}>
                      <dl>
                        <dt>2021.04.01</dt>
                        <dd>webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。</dd>
                      </dl>
                    </a>
                  </Link>
                </InViewMonitor>
              </li>
              <li className={styles.home__news__item}>
                <InViewMonitor
                  classNameNotInView={styles.visHidden}
                  classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                  <Link href="/news">
                    <a className={styles.home__news__link}>
                      <dl>
                        <dt>2021.04.01</dt>
                        <dd>webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。</dd>
                      </dl>
                    </a>
                  </Link>
                </InViewMonitor>
              </li>
              <li className={styles.home__news__item}>
                <InViewMonitor
                  classNameNotInView={styles.visHidden}
                  classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
                  <Link href="/news">
                    <a className={styles.home__news__link}>
                      <dl>
                        <dt>2021.04.01</dt>
                        <dd>webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。</dd>
                      </dl>
                    </a>
                  </Link>
                </InViewMonitor>
              </li>
            </ul>
            <InViewMonitor
              classNameNotInView={styles.visHidden}
              classNameInView={["animate__animated animate__fadeInUp", styles.fadeInUp].join(' ')}>
              <Link href="/news"><a className={[styles.home__news__listLink, styles.home__news__listLink__sp].join(' ')}>〉お知らせ一覧へ</a></Link>
            </InViewMonitor>
          </div>
        </div>
      </div>
    </section>
  );
}
