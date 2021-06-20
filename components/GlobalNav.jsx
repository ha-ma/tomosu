import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./GlobalNav.module.scss";
import Image from "next/image";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-configuration";

function GlobalNav() {
  const [tags, setTags] = useState([]);
  const [spNavState, setSpNavState] = useState(
    typeof window !== "undefined" && window.innerWidth > 1279 ? false : true
  );
  const [logoScale, setLogoScale] = useState(false);
  const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API_END_POINT;
  useEffect(() => {
    const fetchData = async () => {
      const client = Client();

      const res = await client.query(
        Prismic.Predicates.at("document.type", "tags"),
        {
          // orderings: "[my.article.date desc]"
        }
      );
      if (res) {
        const tag_list = res.results
          .map((result) => result.data)
          .flatMap((item) => item.tag);
        setTags(tag_list);
      }
    };
    fetchData();
  }, []);

  if (typeof window !== "undefined") {
    //　スクロールでロゴ拡大・縮小
    if (window.innerWidth > 1279) {
      window.onscroll = function () {
        const logoScale = document.getElementById("globalNav__logo");
        if (document.documentElement.scrollTop > 20) {
          if (logoScale) {
            logoScale.classList.remove(styles.fixed);
            logoScale.classList.add(styles.fixed);
          }
        } else {
          if (logoScale) {
            logoScale.classList.remove(styles.fixed);
          }
        }
      };
    }
    // SPメニューボタン;s
    // if (window.innerWidth < 1279) {
    //   const spNav = document.getElementById("globalNav__spNav");
    //   const spMenu = document.getElementById("globalNav__spMenu");
    //   const spButton = document.getElementById("globalNav__spMenuButton");
    //   if (spButton) {
    //     spButton.addEventListener(
    //       "click",
    //       function (e) {
    //         spButton.classList.toggle(styles.open);
    //         const spHasClass = spButton.classList.contains(styles.open);
    //         if (spHasClass) {
    //           spMenu.classList.add(styles.showMenu);
    //           spNav.classList.add(styles.showNav);
    //         } else {
    //           spMenu.classList.remove(styles.showMenu);
    //           spNav.classList.remove(styles.showNav);
    //         }
    //       },
    //       false
    //     );
    //   }
    // }
  }
  const handleSpMenuButtonClick = () => {
    setSpNavState(!spNavState);
  };
  return (
    <aside className={spNavState ? styles.globalNav__shown : styles.globalNav}>
      <div className={styles.globalNav__logo}>
        <p className={styles.globalNav__logo__catch}>
          道東の未来を灯すSDGsマガジン
        </p>
        <div className={styles.globalNav__logo__img} id="globalNav__logo">
          <Link href="/">
            <a className={styles.globalNav__logo__link}>
              <Image
                src="/images/logo.png"
                quality={100}
                width={631}
                height={227}
              />
            </a>
          </Link>
        </div>
      </div>

      <div
        className={
          spNavState
            ? styles.globalNav__container__shown
            : styles.globalNav__container
        }
      >
        <div className={styles.globalNav__splogo}>
          <p className={styles.globalNav__splogo__catch}>
            道東の未来を灯すSDGsマガジン
          </p>
          <div className={styles.globalNav__splogo__img}>
            <Link href="/">
              <a className={styles.globalNav__splogo__link}>
                <Image
                  src="/images/logo_wh.png"
                  quality={100}
                  width={353}
                  height={72}
                />
              </a>
            </Link>
          </div>
        </div>
        <nav className={styles.globalNav__nav}>
          <ul className={styles.globalNav__list}>
            <li className={styles.globalNav__item}>
              <Link href="/articles">
                <a className={styles.globalNav__link}>記事一覧</a>
              </Link>
            </li>
            {/* <li className={styles.globalNav__item}>
              <Link href="/about">
                <a className={styles.globalNav__link}>私たちのこと</a>
              </Link>
            </li> */}
            <li className={styles.globalNav__item}>
              <Link href="/sdgs">
                <a className={styles.globalNav__link}>SDGsについて</a>
              </Link>
            </li>
          </ul>
        </nav>
        <dl className={styles.globalNav__keyword}>
          <dt>キーワードから読む</dt>
          <dd>
            <ul className={styles.globalNav__keyword__list}>
              {tags.map((tag, i) => (
                <li key={i} className={styles.globalNav__keyword__item}>
                  <Link
                    href={{ pathname: "/articles", query: { tag: tag.text } }}
                  >
                    <a className={styles.globalNav__keyword__link}>
                      #{tag.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <div className={styles.globalNav__bottomMenu}>
          <ul className={styles.globalNav__bottomMenu__list}>
            {/* <li className={styles.globalNav__bottomMenu__item}>
              <Link href="/contact">
                <a className={styles.globalNav__bottomMenu__link}>
                  〉お問い合わせ
                </a>
              </Link>
            </li> */}
            <li className={styles.globalNav__bottomMenu__item}>
              <Link href="/news">
                <a className={styles.globalNav__bottomMenu__link}>〉お知らせ</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.globalNav__bottomMenu__snsList}>
            <li className={styles.globalNav__bottomMenu__snsItem}>
              <Link href="https://www.facebook.com/tomosu.life">
                <a
                  className={styles.globalNav__bottomMenu__snsLnk}
                  target="_blank"
                >
                  <Image
                    src="/images/icon/icon_fb_wh.png"
                    quality={100}
                    width={19}
                    height={37}
                  />
                </a>
              </Link>
            </li>
            <li className={styles.globalNav__bottomMenu__snsItem}>
              <Link href="https://twitter.com/STomosu">
                <a
                  className={styles.globalNav__bottomMenu__snsLink}
                  target="_blank"
                >
                  <Image
                    src="/images/icon/icon_tw_wh.png"
                    quality={100}
                    width={37}
                    height={30}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p
        className={
          spNavState
            ? styles.globalNav__spMenuButton__open
            : styles.globalNav__spMenuButton
        }
        onClick={handleSpMenuButtonClick}
      >
        <span>&nbsp;</span>
      </p>
    </aside>
  );
}

export default GlobalNav;
