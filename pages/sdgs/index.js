import React from "react";
import styles from "../../styles/sdgs.module.scss";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
function Sdgs() {
  return (
    <>
      <PageHero />
      <section className={styles.sdgs}>
        <div className={styles.sdgs__container}>
          <h2 className={styles.sdgs__heading}>
            誰一人取り残さない世界を
            <br />
            共に実現していきませんか。
          </h2>
          {/* <p className={styles.sdgs__desc}>コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。コンセプトテキスト入ります。</p> */}

          <h2 className={styles.sdgs__heading}>
            世界みんなで目指す17個の目標。
          </h2>
          <p className={styles.sdgs__desc}>
            SDGs（持続可能な開発目標）とは、2015年9月の国連サミットで採択された「持続可能な開発のための2030アジェンダ」にて記載された2030年までに持続可能でよりよい世界を目指す国際目標です。17のゴールと169のターゲットから構成されており、地球上の「誰一人取り残さない（leave
            no one behind）」ことを誓っています。
          </p>
        </div>
        <div className={styles.sdgs__objective}>
          <ul className={styles.sdgs__objective__list}>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_01_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>01.</span> 貧困をなくそう
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  あらゆる場所のあらゆる形態の貧困を終わらせる
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_02_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>02.</span> 飢餓をゼロに
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  飢餓を終わらせ、食糧安全保障および栄養改善を実現し、持続可能な農業を促進する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_03_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>03.</span> すべての人に
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    健康と福祉を
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  あらゆる年齢のすべての人々の健康的な生活を確保し、福祉を促進する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_04_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>04.</span> 質の高い教育を
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    みんなに
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  すべての人に包摂的かつ公正な質の高い教育を確保し生涯学習の機会を促進する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_05_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>05.</span> ジェンダー平等を
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    実現しよう
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  ジェンダー平等を達成し、すべての女性および女児の能力強化を行う
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_06_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>06.</span> 安全な水とトイレを
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    世界中に
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  すべての人々の水と衛生の利用可能性と持続可能な管理を確保する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_07_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>07.</span> エネルギーをみんなに
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    そしてクリーンに
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  すべての人々の、安価かつ信頼できる持続可能な近代的エネルギーへのアクセスを確保する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_08_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>08.</span> 働きがいも
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    経済成長も
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  包摂的かつ持続可能な経済成長及びすべての人々の完全かつ生産的雇用と働きがいのある人間らしい雇用（ディーセント・ワーク）を促進する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_09_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>09.</span> 産業と技術革新の
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    基盤をつくろう
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  強靭（レジリエント）なインフラ構築、包摂的かつ持続可能な産業化の促進及びイノベーションの推進を図る
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_10_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>10.</span> 人や国の不平等を
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    なくそう
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  各国内および各国間の不平等を是正する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_11_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>11.</span> 住み続けられる
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    まちづくりを
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  包摂的で安全かつ強靭（レジリエント）で持続可能な都市および人間居住を実現する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_12_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>12.</span> つくる責任
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    つかう責任
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  持続可能な生産消費形態を確保する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_13_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>13.</span> 気候変動に
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    具体的な対策を
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  気候変動及びその影響を軽減するための緊急対策を講じる
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_14_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>14.</span> 海の豊かさを守ろう
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  持続可能な開発のために海洋・海洋資源を保全し、持続可能な形で利用する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_15_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>15.</span> 陸の豊かさも守ろう
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  陸域生態系の保護、回復、持続可能な利用の推進、持続可能な森林の経営、砂漠化への対処、並びに土地の劣化の阻止・回復及び生物多様性の損失を阻止する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_16_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>16.</span> 平和と公正を
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    すべての人に
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  持続可能な開発のための平和で包摂的な社会を促進し、すべての人々に司法へのアクセスを提供し、あらゆるレベルにおいて効果的で説明責任のある包摂的な制度を構築する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
            <li className={styles.sdgs__objective__item}>
              <div className={styles.sdgs__objective__detail}>
                <div className={styles.sdgs__objective__headingBlock}>
                  {/* <Link href="/article"> */}
                  <a className={styles.sdgs__objective__icon}>
                    <Image
                      src="/images/icon/sdg_icon_17_ja.png"
                      quality={100}
                      width={1276}
                      height={1276}
                      className={styles.sdgs__objective__icon__img}
                    />
                  </a>
                  {/* </Link> */}
                  <h3 className={styles.sdgs__objective__heading}>
                    <span>17.</span> パートナーシップで
                    <br className={styles.sdgs__objective__heading__breakSP} />
                    目標を達成しよう
                  </h3>
                </div>
                <p className={styles.sdgs__objective__desc}>
                  持続可能な開発のための実施手段を強化し、グローバル・パートナーシップを活性化する
                </p>
                {/* <div className={styles.sdgs__objective__link}>
                  <Link href="/article">
                    <a>〉関連記事を読む</a>
                  </Link>
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sdgs;
