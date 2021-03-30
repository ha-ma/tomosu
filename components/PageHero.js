import React from 'react'
import { useRouter } from 'next/router';
import styles from './PageHero.module.scss'
import Image from 'next/image'

function PageHero(props) {
  const router = useRouter();
  const path = router.pathname;
  const imagePath = path.includes("/articles/") || path.includes("/news/") ? props.imagePath !== undefined ? props.imagePath : "/images/hero/top.png" : path === "/articles" ? "/images/hero/magazine.png" : path === "/about" ? "/images/hero/about.png" : path === "/sdgs" ? "/images/hero/whatwedo.png" : path === "/contact" ? "/images/hero/contact.png" : path === "/news" ? "/images/hero/news.png" : path === "/privacy-policy" ? "/images/hero/privacypolicy.png" : "/images/hero/top.png"

  return (
    <section className={styles.PageHero}>
      <div className={styles.PageHero__container}>
        <Image src={imagePath} quality={100} width={1400} height={712} className={styles.PageHero__img} />
        { path != "/" && (
          <h1 className={styles.PageHero__heading}>
            {path === "/articles" ? "記事一覧" : path === "/about" ? "私たちのこと" : path === "/sdgs" ? "SDGsについて" : path === "/contact" ? "お問い合わせ" : path === "/news" ? "お知らせ" : path === "/privacy-policy" ? "プライバシーポリシー" : ""}
          </h1>
        )}
      </div>
    </section>
  )
}

export default PageHero
