//pages/[uid].js
import React, { useState, useEffect } from "react";
import styles from "../../styles/articles.module.scss";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { RichText, LinkResolver } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-configuration";
import { queryRepeatableDocuments } from "../../util/queries";
import {
  sdgsDisplayGenerator,
  sdgsIconSwitch,
} from "../../components/sdgsDisplayGenerator";
import { useRouter } from "next/router";

const Article = ({ doc }) => {
  console.log("docdocdoc", doc);
  const [pickUpArticles, setPicUpArticles] = useState([]);
  const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API_END_POINT;

  useEffect(() => {
    const fetchData = async () => {
      const client = Client();
      const articles = await client.query(
        Prismic.predicates.at("document.type", "article"),
        {
          orderings: "[document.last_publication_date desc]",
          pageSize: 2,
        }
      );
      if (articles) {
        const pickUpArticleResults = articles.results;
        setPicUpArticles(pickUpArticleResults);
      }
    };
    fetchData();
  }, []);

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
    const hasGroup = doc.data.group.length !== 0;
    const hasContent = doc.data.content.length !== 0;
    const hasInterviweeName = doc.data.interviewee_name.length !== 0;
    const hasEditorName = doc.data.editor_name.length !== 0;
    const hasInterviweeProfile = doc.data.interviewee_profile.length !== 0;
    const hasEditorProfile = doc.data.editor_profile.length !== 0;
    const hasIntervieweePic = "url" in doc.data.interviewee_pic;
    const hasEditorPic = "url" in doc.data.editor_pic;
    const hasInterviweeLink = "url" in doc.data.interviewee_link;
    const hasEditorLink = "url" in doc.data.editor_link;
    const title = hasTitle ? RichText.asText(doc.data.title) : "Untitled";
    const content = hasContent
      ? RichText.render(doc.data.content, LinkResolver)
      : "";
    const interviewee_name = hasInterviweeName
      ? RichText.asText(doc.data.interviewee_name)
      : "NoName";
    const editor_name = hasEditorName
      ? RichText.render(doc.data.editor_name, LinkResolver)
      : "NoName";
    const interviewee_profile = hasInterviweeProfile
      ? RichText.asText(doc.data.interviewee_profile)
      : "NoContent";
    const editor_profile = hasEditorProfile
      ? RichText.render(doc.data.editor_profile, LinkResolver)
      : "NoContent";
    const interviewee_link = hasInterviweeLink
      ? doc.data.interviewee_link.url
      : "";
    const editor_link = hasEditorLink ? doc.data.editor_link.url : "";
    const SDGsGoals = hasGroup ? sdgsDisplayGenerator(doc.data.group[0]) : [];

    return (
      <>
        <PageHero imagePath={doc.data.eyecatch.url} />
        <section className={styles.articlesdetail}>
          <div className={styles.articlesdetail__container}>
            <div className={styles.articlesdetail__heading}>
              <div className={styles.articlesdetail__heading__top}>
                <p className={styles.articlesdetail__heading__category}>
                  {doc.data.categories}
                </p>
                <p className={styles.articlesdetail__heading__time}>
                  {publishDate}
                </p>
              </div>
              <div className={styles.articlesdetail__heading__bottom}>
                <div className={styles.articlesdetail__heading__left}>
                  <h1 className={styles.articlesdetail__heading__title}>
                    {title}
                  </h1>
                  <ul className={styles.articlesdetail__heading__hashList}>
                    {doc.tags.map((tag) => {
                      return (
                        <li
                          className={styles.articlesdetail__heading__hashItem}
                        >
                          <Link href="/">
                            <a
                              className={
                                styles.articlesdetail__heading__hashLink
                              }
                            >{`#${tag}`}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  {/* SDGs Goals */}
                  <ul className={styles.articlesdetail__heading__icon}>
                    {SDGsGoals &&
                      SDGsGoals.map((value) => {
                        if (value.display) {
                          return (
                            <li
                              className={
                                styles.articlesdetail__heading__iconItem
                              }
                            >
                              <Image
                                src={sdgsIconSwitch(value.name)}
                                quality={100}
                                width={1276}
                                height={1276}
                              />
                            </li>
                          );
                        }
                      })}
                  </ul>
                </div>
                <ul className={styles.articlesdetail__heading__snsList}>
                  <li className={styles.articlesdetail__heading__snsItem}>
                    {/* FacebookIcon */}
                    <Link href="https://www.facebook.com/tomosu.life">
                      <a className={styles.articlesdetail__heading__snsLink}>
                        <div className={styles.articlesdetail__heading__snsImg}>
                          <Image
                            src="/images/icon/icon_fb_gr.png"
                            quality={100}
                            width={75}
                            height={150}
                          />
                        </div>
                      </a>
                    </Link>
                  </li>
                  {/* TwitterIcon */}
                  {/* <li className={styles.articlesdetail__heading__snsItem}>
                    <Link href="/">
                      <a className={styles.articlesdetail__heading__snsLink}>
                        <div className={styles.articlesdetail__heading__snsImg}>
                          <Image
                            src="/images/icon/icon_tw_gr.png"
                            quality={100}
                            width={150}
                            height={120}
                          />
                        </div>
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* 記事本文 */}
            <div className={styles.articlesdetail__content}>{content}</div>
            {/* 語り手情報 */}
            <div className={styles.articlesdetail__relatedLink}>
              <h2 className={styles.articlesdetail__relatedLink__heading}>
                {interviewee_name}
              </h2>
              <div className={styles.articlesdetail__relatedLink__img}>
                {hasIntervieweePic ? (
                  <Image
                    src={doc.data.interviewee_pic.url}
                    quality={100}
                    width={321}
                    height={322}
                  />
                ) : (
                  <Image
                    src="/images/noimage.png"
                    quality={100}
                    width={321}
                    height={322}
                  />
                )}
              </div>
              <p className={styles.articlesdetail__relatedLink__desc}>
                {interviewee_profile}
              </p>
              {hasInterviweeLink && (
                <a
                  href={interviewee_link}
                  className={styles.articlesdetail__relatedLink__link}
                  target="_blank"
                >
                  URL：{`${interviewee_link}`}
                </a>
              )}
            </div>
            {/* 聞き手情報 */}
            {/* <div className={styles.articlesdetail__editor}>
              <div className={styles.articlesdetail__editor__img}>
                {hasEditorPic ? (
                  <Image
                    src={doc.data.editor_pic.url}
                    quality={100}
                    width={321}
                    height={322}
                  />
                ) : (
                  <Image
                    src="/images/noimage.png"
                    quality={100}
                    width={321}
                    height={322}
                  />
                )}
              </div>
              <div className={styles.articlesdetail__editor__heading}>
                {editor_name}
              </div>
              <p className={styles.articlesdetail__editor__desc}>
                {editor_profile}
              </p>
              {hasEditorLink && (
                <a
                  href={editor_link}
                  className={styles.articlesdetail__editor__link}
                  target="_blank"
                >
                  URL：{`${editor_link}`}
                </a>
              )}
            </div> */}
          </div>
          <div className={styles.articlesdetail__pickup}>
            <div className={styles.articlesdetail__pickup__heading}>
              <h2 className={styles.articlesdetail__pickup__heading__en}>
                Pick Up
              </h2>
              <p className={styles.articlesdetail__pickup__heading__desc}>
                合わせて読みたいオススメ記事
              </p>
            </div>
            <div className={styles.articlesdetail__pickup__listBlock}>
              <ul className={styles.articlesdetail__pickup__list}>
                {pickUpArticles.map((article) => {
                  const uid = article.uid;
                  const title = article.data.title[0].text;
                  const category = article.data.categories;
                  const tags = article.tags;
                  const eyecatch = article.data.eyecatch.url;
                  return (
                    <li className={styles.articlesdetail__pickup__item}>
                      <Link href={`/articles/${uid}`}>
                        <a className={styles.articlesdetail__pickup__link}>
                          <div className={styles.articlesdetail__pickup__img}>
                            <Image
                              src={eyecatch ? eyecatch : "/images/noimage.png"}
                              quality={100}
                              width={600}
                              height={400}
                            />
                          </div>
                          <ul
                            className={styles.articlesdetail__pickup__category}
                          >
                            <li
                              className={
                                styles.articlesdetail__pickup__category__item
                              }
                            >
                              {category}
                            </li>
                          </ul>
                          <h3
                            className={
                              styles.articlesdetail__pickup__item__heading
                            }
                          >
                            {title}
                          </h3>
                        </a>
                      </Link>
                      <ul className={styles.articlesdetail__pickup__tag}>
                        {tags.map((tag) => (
                          <li
                            className={styles.articlesdetail__pickup__tag__item}
                          >
                            <Link
                              href={{
                                pathname: "/articles",
                                query: { tag: tag },
                              }}
                            >
                              <a
                                className={
                                  styles.articlesdetail__pickup__tag__link
                                }
                              >
                                #{`${tag}`}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.articlesdetail__pickup__backLink}>
                <Link href="/articles">
                  <a>記事一覧へ</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export async function getStaticProps({ params }) {
  const client = Client();
  const doc = await client.getByUID("article", params.uid);
  console.group(doc);
  return {
    props: {
      doc,
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "article"
  );
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: documents.map((doc) => `/articles/${doc.uid}`),
    fallback: true,
  };
}

// export async function getServerSideProps(context) {
//   const client = Client()
//   const articles = await client.query(Prismic.predicates.at("document.type", "article"),{
//     orderings : '[document.last_publication_date desc]',
//     pageSize: 2
//   })
//   return {
//     props: {
//       articles: articles ? articles.results.sort() : []
//     }
//   };
// }

export default Article;
