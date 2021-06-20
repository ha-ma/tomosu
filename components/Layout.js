import React from "react";
import GlobalNav from "./GlobalNav";
import styles from "./Layout.module.scss";
import Head from "next/head";
import { useWindowWidth } from "./useWindowWidth";

export const siteTitle = "TOMOSU";

function Layout({ children }) {
  const width = useWindowWidth();
  return (
    <div className={styles.layoutContainer}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <GlobalNav width={width} />
      <main className={styles.layoutMain}>{children}</main>
    </div>
  );
}

export default Layout;
