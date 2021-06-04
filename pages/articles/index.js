import React from "react";
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-configuration";
import styles from "../../styles/articles.module.scss";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/router";

const Articles = ({ articles }) => {
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
              {articles.map(article => (
                <li key={article.id} className={styles.articleslist__item}>
                  <Link href={`/articles/${article.uid}`}>
                    <a className={styles.articleslist__link}>
                      <div className={styles.articleslist__img}>{article.data.eyecatch.url ? <Image src={article.data.eyecatch.url} quality={100} width={600} height={400} /> : <Image src="/images/noimage.png" quality={100} width={600} height={400} />}</div>
                      <ul className={styles.articleslist__category}>
                        <li className={styles.articleslist__category__item}>{article.data.categories}</li>
                      </ul>
                      <h3 className={styles.articleslist__item__heading}>{article.data.title[0].text}</h3>
                    </a>
                  </Link>
                  <ul className={styles.articleslist__tag}>
                    {article.tags.map(tag => (
                      <li key={tag.id} className={styles.articleslist__tag__item}>
                        <span href="/" className={styles.articleslist__tag__link}>
                          #{tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            {/* <Pagination /> */}
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
//   // const articles = await client.query(Prismic.Predicates.at("document.tags", ["海"]), {
//   //   // orderings: "[my.article.date desc]"
//   // });

//   return {
//     props: {
//       articles: articles ? articles.results : []
//     }
//   };
// }

export async function getServerSideProps(context) {
  const client = Client();

  if (context.query.tag) {
    const articles = await client.query(Prismic.Predicates.at("document.tags", [context.query.tag]), {
      // orderings: "[my.article.date desc]"
    });
    return {
      props: {
        articles: articles ? articles.results : []
      } // will be passed to the page component as props
    };
  } else {
    const articles = await client.query(Prismic.Predicates.at("document.type", "article"), {
      // orderings: "[my.article.date desc]"
    });
    return {
      props: {
        articles: articles ? articles.results : []
      } // will be passed to the page component as props
    };
  }
}
export default Articles;
