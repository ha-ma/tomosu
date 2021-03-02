import React from "react";
import Prismic from '@prismicio/client'
import { Client } from "../../prismic-configuration";
import ButtomContact from "../../components/BottomContact"

const Artiles = ({ articles }) => {
  console.log('articles', articles);
  return (
  <div>
    <ButtomContact />
    <ul>
      {
        articles.map(article => (
          <li key={article.id}>
            id: {article.id}<br />
            title: {article.data.title[0].text}
          </li>
        ))
      }
    </ul>
  </div>
  );
};

export async function getStaticProps({ params }) {
  const client = Client();
  // const doc = await client.getByUID("page", params.uid);

  const articles = await client.query(
    Prismic.Predicates.at("document.type", "article"), {
      // orderings: "[my.article.date desc]"
    },
  )

  return {
    props: {
      articles: articles ? articles.results : [],
    }
  };
}

export default Artiles;
