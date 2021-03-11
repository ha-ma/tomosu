import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className={styles.home__slide__dotItem}>0{i + 1}</div>
    )
  };
  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        {/* slide */}
        <div className={styles.home__slide}>
          <Slide {...settings}>
            <div className={styles.home__slide__item}>
              <Image src="/images/hero/top.png" quality={100} width={1400} height={1007} />
              <div className={styles.home__slide__heading}>
                <p className={styles.home__slide__category}>セクション名</p>
                <p className={styles.home__slide__title}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</p>
              </div>
            </div>
            <div className={styles.home__slide__item}>
              <Image src="/images/hero/top.png" quality={100} width={1400} height={1007} />
              <div className={styles.home__slide__heading}>
                <p className={styles.home__slide__category}>セクション名</p>
                <p className={styles.home__slide__title}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</p>
              </div>
            </div>
            <div className={styles.home__slide__item}>
              <Image src="/images/hero/top.png" quality={100} width={1400} height={1007} />
              <div className={styles.home__slide__heading}>
                <p className={styles.home__slide__category}>セクション名</p>
                <p className={styles.home__slide__title}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</p>
              </div>
            </div>
          </Slide>
        </div>
        {/* Magazine */}
        <div className={styles.home__articles}>
          <div className={styles.home__heading}>
            <h2 className={styles.home__heading__en}>Magazine</h2>
            <p className={styles.home__heading__desc}>道東の未来を灯す、ヒトコトモノをご紹介。</p>
          </div>
          <div className={styles.home__articles__listBlock}>
            <ul className={styles.home__articles__list}>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <div className={styles.home__articles__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.home__articles__category}>
                      <li className={styles.home__articles__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.home__articles__tag}>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <div className={styles.home__articles__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.home__articles__category}>
                      <li className={styles.home__articles__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.home__articles__tag}>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <div className={styles.home__articles__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.home__articles__category}>
                      <li className={styles.home__articles__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.home__articles__tag}>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.home__articles__item}>
                <Link href="/article">
                  <a className={styles.home__articles__link}>
                    <div className={styles.home__articles__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.home__articles__category}>
                      <li className={styles.home__articles__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.home__articles__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.home__articles__tag}>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.home__articles__tag__item}>
                    <Link href="/"><a className={styles.home__articles__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link href="/articles">
              <a className={styles.home__articles__listLink}>記事一覧へ</a>
            </Link>
          </div>
        </div>
        {/* What We Do */}
        <div className={styles.home__about}>
          <div className={[styles.home__heading, styles.aboutHeading].join(' ')}>
            <h2 className={[styles.home__heading__en, styles.aboutHeading__en].join(' ')}>What We Do</h2>
            <p className={styles.home__heading__desc}>わたしたちと、皆さんと一緒にできること。</p>
          </div>
          <div className={styles.home__about__img}>
            <Image src="/images/top/top_about.png" quality={100} width={1256} height={675} />
          </div>
          <div className={styles.home__about__detail}>
            <h3 className={styles.home__about__detail__heading}>私たちのこと</h3>
            <p className={styles.home__about__detail__desc}>tomosuは道東SDGs協議会が運営するオンラインマガジンです。私たちは道東エリアの取材発信のほかワークショップや講演などの取り組みにも力をいれています。</p>
            <Link href="/about">
              <a className={styles.home__about__detail__link}>詳しく見る</a>
            </Link>
          </div>
        </div>
        {/* About SDGs */}
        <div className={styles.home__sdgs}>
          <div className={[styles.home__heading, styles.sdgsHeading].join(' ')}>
            <h2 className={styles.home__heading__en}>About SDGs</h2>
            <p className={styles.home__heading__desc}>身近なことからアクションを起こそう！</p>
          </div>
          <div className={styles.home__sdgs__img}>
            <Image src="/images/top/top_sdgs.png" quality={100} width={1256} height={675} />
          </div>
          <div className={styles.home__sdgs__detail}>
            <h3 className={styles.home__sdgs__detail__heading}>SDGsについて</h3>
            <p className={styles.home__sdgs__detail__desc}>SDGsって最近よく耳にするけど一体なんだろう。どういうことをすればいいの？そんな疑問をわかりやすく解説しています。一緒に身近なことから始めませんか？</p>
            <Link href="/sdgs">
              <a className={styles.home__sdgs__detail__link}>詳しく見る</a>
            </Link>
          </div>
        </div>
        {/* News */}
        <div className={styles.home__news}>
          <div  className={[styles.home__heading, styles.newsHeading].join(' ')}>
            <h2 className={styles.home__heading__en}>News</h2>
          </div>
          <div className={styles.home__news__listBlock}>
            <Link href="/news"><a className={styles.home__news__listLink}>〉お知らせ一覧へ</a></Link>
            <ul className={styles.home__news__list}>
              <li className={styles.home__news__item}>
                <Link href="/news">
                  <a className={styles.home__news__link}>
                    <dl>
                      <dt>2021.04.01</dt>
                      <dd>webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。</dd>
                    </dl>
                  </a>
                </Link>
              </li>
              <li className={styles.home__news__item}>
                <Link href="/news">
                  <a className={styles.home__news__link}>
                    <dl>
                      <dt>2021.04.01</dt>
                      <dd>webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。</dd>
                    </dl>
                  </a>
                </Link>
              </li>
              <li className={styles.home__news__item}>
                <Link href="/news">
                  <a className={styles.home__news__link}>
                    <dl>
                      <dt>2021.04.01</dt>
                      <dd>webサイトを公開しました。webサイトを公開しました。webサイトを公開しました。</dd>
                    </dl>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
