//pages/[uid].js
import React from "react";
import styles from '../../styles/articles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../components/PageHero'
import { RichText, LinkResolver } from 'prismic-reactjs';
import Prismic from '@prismicio/client'
import { Client } from "../../prismic-configuration";
import { queryRepeatableDocuments } from "../../util/queries";

const Article = ({ doc }) => {
  console.log('doc', doc);
  if (doc && doc.data) {
    const hasTitle = doc.data.title.length !== 0;
    const hasContent = doc.data.content.length !== 0;
    const hasInterviweeName = doc.data.interviewee_name.length !== 0;
    const hasEditorName = doc.data.editor_name.length !== 0;
    const hasInterviweeProfile = doc.data.interviewee_profile.length !== 0;
    const hasEditorProfile = doc.data.editor_profile.length !== 0;
    const hasInterviweeLink = doc.data.interviewee_link.url.length !== 0;
    const hasEditorLink = doc.data.editor_link.url.length !== 0;
    const title = hasTitle ? RichText.asText(doc.data.title) : "Untitled";
    const content = hasContent ? RichText.render(doc.data.content, LinkResolver) : "";
    const interviewee_name = hasInterviweeName ? RichText.asText(doc.data.interviewee_name) : "Untitled";
    const editor_name = hasEditorName ? RichText.render(doc.data.editor_name, LinkResolver) : "";
    const interviewee_profile = hasInterviweeProfile ? RichText.asText(doc.data.interviewee_profile) : "Untitled";
    const editor_profile = hasEditorProfile ? RichText.render(doc.data.editor_profile, LinkResolver) : "";
    const interviewee_link = hasInterviweeLink ? doc.data.interviewee_link.url : "";
    const editor_link = hasEditorLink ? doc.data.editor_link.url : "";
    console.log('tags', doc.tags)
    console.log('hasEditorLink', hasEditorLink)
    console.log('editor_link', editor_link)
    console.log('hasInterviweeLink', hasInterviweeLink)
    console.log('editor_link', editor_link)
    console.log('doc.data.eyecatch.url', doc.data.eyecatch.url)
  return (
    <>
      <PageHero imagePath={doc.data.eyecatch.url}/>
      <section className={styles.articlesdetail}>
        <div className={styles.articlesdetail__container}>
          <div className={styles.articlesdetail__heading}>
            <div className={styles.articlesdetail__heading__top}>
              <p className={styles.articlesdetail__heading__category}>{doc.data.categories}</p>
              <p className={styles.articlesdetail__heading__time}>2021.04.01</p>
            </div>
            <div className={styles.articlesdetail__heading__bottom}>
              <div className={styles.articlesdetail__heading__left}>
                <h1 className={styles.articlesdetail__heading__title}>{title}</h1>
                <ul className={styles.articlesdetail__heading__hashList}>
                  {
                    doc.tags.map((tag) => {
                      return (
                        <li className={styles.articlesdetail__heading__hashItem}>
                          <Link href="/">
                            <a className={styles.articlesdetail__heading__hashLink}>{`#${tag}`}</a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
                <ul className={styles.articlesdetail__heading__icon}>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_01_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_02_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_01_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_02_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_01_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_02_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_01_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                  <li className={styles.articlesdetail__heading__iconItem}>
                    <Image src="/images/icon/sdg_icon_02_ja.png" quality={100} width={1276} height={1276} />
                  </li>
                </ul>
              </div>
              <ul className={styles.articlesdetail__heading__snsList}>
                <li className={styles.articlesdetail__heading__snsItem}>
                  <Link href="/">
                    <a className={styles.articlesdetail__heading__snsLink}>
                      <div className={styles.articlesdetail__heading__snsImg}>
                        <Image src="/images/icon/icon_fb_gr.png" quality={100} width={75} height={150} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={styles.articlesdetail__heading__snsItem}>
                  <Link href="/">
                    <a className={styles.articlesdetail__heading__snsLink}>
                      <div className={styles.articlesdetail__heading__snsImg}>
                        <Image src="/images/icon/icon_tw_gr.png" quality={100} width={150} height={120} />
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.articlesdetail__content}>{content}</div>
          <div className={styles.articlesdetail__relatedLink}>
            <h2 className={styles.articlesdetail__relatedLink__heading}>{interviewee_name}</h2>
            <div className={styles.articlesdetail__relatedLink__img}>
              <Image src={doc.data.interviewee_pic.url} quality={100} width={321} height={322} />
            </div>
            <p className={styles.articlesdetail__relatedLink__desc}>{interviewee_profile}</p>
            <a href={interviewee_link} className={styles.articlesdetail__relatedLink__link} target="_blank">URL：{`${interviewee_link}`}</a>
          </div>    
          <div className={styles.articlesdetail__editor}>
            <div className={styles.articlesdetail__editor__img}>
              <Image src={doc.data.editor_pic.url} quality={100} width={321} height={322} />
            </div>
            <div className={styles.articlesdetail__editor__heading}>{editor_name}</div>
            <p className={styles.articlesdetail__editor__desc}>{editor_profile}</p>
            <a href={editor_link} className={styles.articlesdetail__editor__link} target="_blank">URL：{`${editor_link}`}</a>
          </div>
        </div>
        <div className={styles.articlesdetail__pickup}>
          <div className={styles.articlesdetail__pickup__heading}>
            <h2 className={styles.articlesdetail__pickup__heading__en}>Pick Up</h2>
            <p className={styles.articlesdetail__pickup__heading__desc}>合わせて読みたいオススメ記事</p>
          </div>
          <div className={styles.articlesdetail__pickup__listBlock}>
            <ul className={styles.articlesdetail__pickup__list}>
              <li className={styles.articlesdetail__pickup__item}>
                <Link href="/articles/">
                  <a className={styles.articlesdetail__pickup__link}>
                    <div className={styles.articlesdetail__pickup__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articlesdetail__pickup__category}>
                      <li className={styles.articlesdetail__pickup__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articlesdetail__pickup__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articlesdetail__pickup__tag}>
                  <li className={styles.articlesdetail__pickup__tag__item}>
                    <Link href="/"><a className={styles.articlesdetail__pickup__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articlesdetail__pickup__tag__item}>
                    <Link href="/"><a className={styles.articlesdetail__pickup__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.articlesdetail__pickup__item}>
                <Link href="/articles/">
                  <a className={styles.articlesdetail__pickup__link}>
                    <div className={styles.articlesdetail__pickup__img}>
                      <Image src="/images/sample_article_image.png" quality={100} width={600} height={400} />
                    </div>
                    <ul className={styles.articlesdetail__pickup__category}>
                      <li className={styles.articlesdetail__pickup__category__item}>セクション名</li>
                    </ul>
                    <h3 className={styles.articlesdetail__pickup__item__heading}>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h3>
                  </a>
                </Link>
                <ul className={styles.articlesdetail__pickup__tag}>
                  <li className={styles.articlesdetail__pickup__tag__item}>
                    <Link href="/"><a className={styles.articlesdetail__pickup__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                  <li className={styles.articlesdetail__pickup__tag__item}>
                    <Link href="/"><a className={styles.articlesdetail__pickup__tag__link}>#ハッシュタグ</a></Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={styles.articlesdetail__pickup__backLink}>
              <Link href="/articles"><a>記事一覧へ</a></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
  }
};

export async function getStaticProps({ params }) {
  const client = Client();
  const doc = await client.getByUID("article", params.uid);

  return {
    props: {
      doc
    }
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'article')
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: documents.map(doc => `/articles/${doc.uid}`),
    fallback: true
  };
}

export default Article;
