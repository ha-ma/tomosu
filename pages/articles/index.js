import React from "react";
// import Prismic from "@prismicio/client";
// import { Client } from "../../prismic-configuration";
import styles from '../../styles/articles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../components/PageHero'
import Pagination from '../../components/Pagination'

const Artiles = ({ articles }) => {
  // console.log("articles", articles);
  return (
    <>
      <PageHero />
      <section className={styles.articleslist}>
        <div className={styles.articleslist__container}>
          <div className={styles.articleslist__heading}>
            <h2 className={styles.articleslist__heading__en}>Magazine</h2>
            <p className={styles.articleslist__heading__desc}>道東の未来を灯す、ヒトコトモノをご紹介。</p>
          </div>
          <div className={styles.articleslist__listBlock}>
            <ul className={styles.articleslist__list}>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articleslist__item}>
                <Link href="/articles">
                  <a className={styles.articleslist__link}>
                    <div className={styles.articleslist__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articleslist__category}>
                      <li className={styles.articleslist__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articleslist__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articleslist__tag}>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articleslist__tag__item}>
                    <Link href="/"><a className={styles.articleslist__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
};

// export async function getStaticProps({ params }) {
//   const client = Client();
//   // const doc = await client.getByUID("page", params.uid);

//   const articles = await client.query(Prismic.Predicates.at("document.type", "article"), {
//     // orderings: "[my.article.date desc]"
//   });

//   return {
//     props: {
//       articles: articles ? articles.results : []
//     }
//   };
// }

export default Artiles;
