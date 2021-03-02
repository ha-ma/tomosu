//pages/[uid].js
import React from "react";
import Prismic from '@prismicio/client'
import { Client } from "../../prismic-configuration";
import { queryRepeatableDocuments } from "../../util/queries";

const Article = ({ article }) => {
  console.log('article', article);
  if (article && article.data) {
    const hasTitle = RichText.asText(article.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(article.data.title) : "Untitled";

    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="main">
          <div className="outer-container">
            <BackButton />
            <h1>{title}</h1>
          </div>
          {/* <SliceZone sliceZone={article.data.body} /> */}
        </div>
        {/* <style jsx global>
          {articleStyles}
        </style> */}
      </DefaultLayout>
    );
  }

  return null;
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
  // const documents = await queryRepeatableDocuments((doc) => doc.type === 'article')
  // return {
  //   // You can run a separate query here to get dynamic parameters from your documents.
  //   paths: documents.map(doc => `/articles/${doc.uid}`),
  //   fallback: true
  // };
}

export default Article;
