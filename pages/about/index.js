import React from "react";
import styles from "../../styles/about.module.scss";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";

function About() {
  return (
    <>
      <PageHero />
      <section className={styles.about}>
        <div className={styles.about__container}>
          <h2 className={styles.about__heading}>
            北海道のひがし「道東」から
            <br className={styles.about__heading__breakSP} />
            共に
            <br className={styles.about__heading__breakPC} />
            未来を照らす
            <br className={styles.about__heading__breakSP} />
            アクションを起こそう。
          </h2>
          <div className={styles.about__concept}>
            <p className={styles.about__concept__desc}>
              「トモス」は北海道の東部「道東」で、持続可能な取り組みをおこなう「ヒト・モノ・コト」を紹介するWEBマガジンです。自然の豊かさや文化的多様性を学べる土地、「道東」の未だ顕在化されていない持続可能な取り組みを可視化していくために、地域内外から参加できるプラットフォームとしての役割を担っていきたいと思っております。※記事について時代の変化が著しい現在の多様な視点から様々な意見があるかもしれませんが、なるべく取材させていただいた、ご本人の想いを尊重して記事を掲載させていただいております
            </p>
            <Image
              src="/images/logo_bk.png"
              quality={100}
              width={580}
              height={120}
              className={styles.about__concept__img}
            />
          </div>
          <div className={styles.about__able}>
            <h3 className={styles.about__able__heading}>私たちができること</h3>
            <ul className={styles.about__able__list}>
              <li className={styles.about__able__item}>
                <div className={styles.about__able__img}>
                  <Image
                    src="/images/about/about1.png"
                    quality={100}
                    width={600}
                    height={400}
                  />
                </div>
                <div className={styles.about__able__detail}>
                  <h4 className={styles.about__able__detail__heading}>
                    取材・記事の制作
                  </h4>
                  <p className={styles.about__able__detail__desc}>
                    「トモス」は北海道の東側「道東」で、持続可能な取り組みをおこなう「ヒト」「モノ」「コト」といった情報をお伝えしていきます。取材した持続可能な取り組みをおこなう人たちの情報は、新しい価値としてこの地域の教育や観光分野にも役立てて参りたいと思っております。取材依頼などのお問合せは「トモス」まで。
                  </p>
                </div>
              </li>
              <li className={styles.about__able__item}>
                <div className={styles.about__able__img}>
                  <Image
                    src="/images/about/about2.png"
                    quality={100}
                    width={600}
                    height={400}
                  />
                </div>
                <div className={styles.about__able__detail}>
                  <h4 className={styles.about__able__detail__heading}>
                    学校・企業での講演
                  </h4>
                  <p className={styles.about__able__detail__desc}>
                    学校や企業でSDGsを取り入れるアクションを応援します。SDGsの基本的な考えを学ぶ講演会や「トモス」を教材として扱う授業の実施。カードゲームファシリテーターの派遣など、みなさんの学びをサポート致します。
                  </p>
                </div>
              </li>
              <li className={styles.about__able__item}>
                <div className={styles.about__able__img}>
                  <Image
                    src="/images/about/about3.png"
                    quality={100}
                    width={600}
                    height={400}
                  />
                </div>
                <div className={styles.about__able__detail}>
                  <h4 className={styles.about__able__detail__heading}>
                    ワークショップの企画・運営
                  </h4>
                  <p className={styles.about__able__detail__desc}>
                    地域課題をみんなで考えるワークショップをあなたの町で開催しませんか？すでに道東6市町（別海町、浜中町、中標津町、標津町、根室市、釧路市）で実施しており、ここから新しいアクションをはじめるつながりが生まれるかもしれません。
                  </p>
                  {/* <Link href="/">
                    <a className={styles.about__able__detail__link}>
                      〉開催レポートを読む
                    </a>
                  </Link> */}
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.about__organization}>
            <div className={styles.about__organization__inner}>
              <h3 className={styles.about__organization__heading}>
                運営団体について
              </h3>
              <p className={styles.about__organization__desc}>
                「トモス」を運営する「道東SDGs推進協議会」は、SDGsの普及啓発を活動の柱とする道東の酪農家、漁師、事業者、市町村議員などで構成された自主的な協議会組織です。
              </p>
              <ul className={styles.about__organization__list}>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>団体名</dt>
                    <dd>道東SDGs推進協議会</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>所在地</dt>
                    <dd>北海道標津郡中標津町養老牛200-2</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>設立日</dt>
                    <dd>2018年5月11日</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>代表者</dt>
                    <dd>中山勝志</dd>
                  </dl>
                </li>
                <li className={styles.about__organization__item}>
                  <dl>
                    <dt>連絡先</dt>
                    <dd>easternhokkaidosdgs@gmail.com</dd>
                  </dl>
                </li>
                {/* <li className={styles.about__organization__item}>
                  <dl>
                    <dt>事業内容</dt>
                    <dd>□□□□□□□□□□□□□□□</dd>
                  </dl>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
