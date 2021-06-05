import React from "react";
import styles from "../../styles/news.module.scss";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { RichText, LinkResolver } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-configuration";
import { queryRepeatableDocuments } from "../../util/queries";
import { useRouter } from "next/router";

function News({ doc }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (doc && doc.data) {
    const dt = new Date(doc.first_publication_date);
    const year = dt.getFullYear();
    const month = ("00" + (dt.getMonth() + 1)).slice(-2);
    const date = ("00" + dt.getDate()).slice(-2);
    const publishDate = `${year}.${month}.${date}`;
    const hasTitle = doc.data.title.length !== 0;
    const hasContent = doc.data.content.length !== 0;
    const title = hasTitle ? RichText.asText(doc.data.title) : "Untitled";
    const content = hasContent ? RichText.render(doc.data.content, LinkResolver) : "";
    return (
      <>
        <PageHero imagePath={doc.data.eyecatch.url} />
        <section className={styles.newsdetail}>
          <div className={styles.newsdetail__container}>
            <div className={styles.newsdetail__heading}>
              <div className={styles.newsdetail__heading__top}>
                <p className={styles.newsdetail__heading__category}>{doc.data.categories}</p>
                <p className={styles.newsdetail__heading__time}>{publishDate}</p>
              </div>
              <h1 className={styles.newsdetail__heading__title}>{title}</h1>
              <div className={styles.newsdetail__heading__bottom}>
                <ul className={styles.newsdetail__heading__hashList}>
                  {doc.tags.map(tag => (
                    <li className={styles.newsdetail__heading__hashItem}>
                      <Link href="/">
                        <a className={styles.newsdetail__heading__hashLink}>{`#${tag}`}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className={styles.newsdetail__heading__snsList}>
                  <li className={styles.newsdetail__heading__snsItem}>
                    <Link href="https://www.facebook.com/tomosu.life">
                      <a target="_blank" className={styles.newsdetail__heading__snsLink}>
                        <div className={styles.newsdetail__heading__snsImg}>
                          <Image src="/images/icon/icon_fb_gr.png" quality={100} width={30} height={60} />
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.newsdetail__content}>{content}</div>
            <div className={styles.newsdetail__content__link}>
              <Link href="/news">
                <a>〉お知らせ一覧にもどる</a>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default News;

export async function getStaticProps({ params }) {
  const client = Client();
  const doc = await client.getByUID("news", params.uid);
  return {
    props: {
      doc
    }
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(doc => doc.type === "news");
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: documents.map(doc => `/news/${doc.uid}`),
    fallback: true
  };
}
