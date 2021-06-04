import React from 'react'
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-configuration";
import styles from '../../styles/news.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../components/PageHero'
import Pagination from '../../components/Pagination'

function NewsList({ news_list }) {
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
              {
                news_list.map(news => (
                  <li className={styles.newslist__item}>
                    <Link href={`/news/${news.uid}`}>
                      <a className={styles.newslist__link}>
                        <div className={styles.newslist__img}>
                        {
                          news.data.eyecatch.url 
                          ? 
                          <Image src={news.data.eyecatch.url} quality={100} width={600} height={400} /> 
                          : 
                          <Image src="/images/noimage.png" quality={100} width={600} height={400} />
                        }
                        </div>
                        <ul className={styles.newslist__category}>
                          <li className={styles.newslist__category__item}>{news.data.categories}</li>
                        </ul>
                        <h3 className={styles.newslist__item__heading}>{news.data.title[0].text}</h3>
                      </a>
                    </Link>
                    <ul className={styles.newslist__tag}>
                      {
                        news.tags.map(tag => 
                          <li key={tag.id} className={styles.newslist__tag__item}>
                            <Link href="/"><a className={styles.newslist__tag__link}>#{tag}</a></Link>
                          </li>
                        )
                      }
                    </ul>
                  </li>
                ))
              }
            </ul>
            {/* <Pagination /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsList

export async function getServerSideProps(context) {
  const client = Client()
  if (context.query.tag) {
    const news_list = await client.query(Prismic.Predicates.at("document.tags", [context.query.tag]), {});
    return {
      props: {
        news_list: news_list ? news_list.results : []
      } // will be passed to the page component as props
    };
  }
  const news_list = await client.query(Prismic.Predicates.at("document.type", "news"),{})
  return {
    props: {
      news_list: news_list ? news_list.results : []
    }
  };
}