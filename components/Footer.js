import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__menu}>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}>
                <Link href="/articles">
                  <a className={styles.footer__link}>記事一覧</a>
                </Link>
              </li>
              {/* <li className={styles.footer__item}>
                <Link href="/about">
                  <a className={styles.footer__link}>私たちのこと</a>
                </Link>
              </li>
              <li className={styles.footer__item}>
                <Link href="/sdgs">
                  <a className={styles.footer__link}>SDGsについて</a>
                </Link>
              </li> */}
              <li className={styles.footer__item}>
                <Link href="/news">
                  <a className={styles.footer__link}>お知らせ</a>
                </Link>
              </li>
              {/* <li className={styles.footer__item}>
                <Link href="/contact">
                  <a className={styles.footer__link}>お問い合わせ</a>
                </Link>
              </li> */}
            </ul>
            <div className={styles.footer__bottomMenu}>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <Link href="/privacy-policy">
                    <a className={styles.footer__link}>プライバシーポリシー</a>
                  </Link>
                </li>
              </ul>

              <div className={styles.footer__sns}>
                <ul className={styles.footer__sns__list}>
                  <li className={styles.footer__sns__item}>
                    <Link href="https://www.facebook.com/tomosu.life">
                      <a target="_blank" className={styles.footer__sns__link}>
                        <Image
                          src="/images/icon/icon_fb_wh.png"
                          quality={100}
                          width={36}
                          height={72}
                          className={styles.footer__sns__img}
                        />
                      </a>
                    </Link>
                  </li>
                  {/* <li className={styles.footer__sns__item}>
                    <Link href="">
                      <a target="_blank" className={styles.footer__sns__link}>
                      <Image src='/images/icon/icon_tw_wh.png' quality={100} width={72} height={58} className={styles.footer__sns__img} />
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer__logo}>
            <p className={styles.footer__logo__catch}>
              道東の未来を灯すSDGsマガジン
            </p>
            <Link href="/">
              <a className={styles.footer__logo__link}>
                <Image
                  src="/images/logo_wh.png"
                  quality={100}
                  width={353}
                  height={72}
                  className={styles.footer__img}
                />
              </a>
            </Link>
          </div>
        </div>
        <p className={styles.footer__copy}>
          &copy; tomosu All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
