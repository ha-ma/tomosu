import React from 'react'
import styles from '../../styles/privacy-policy.module.scss'
import PageHero from '../../components/PageHero'

function Privacy() {
  return (
    <>
      <PageHero />
      <section className={styles.privacyPolicy}>
        <div className={styles.privacyPolicy__container}>
          <h2 className={styles.privacyPolicy__heading}><span className={styles.privacyPolicy__heading__sp}>tomosu</span>プライバシーポリシー</h2>
          <div className={styles.privacyPolicy__desc}>
            <p className={styles.privacyPolicy__text}>tomosu（以下、「当社」といいます。）は、本ウェブサイト（以下「本サイト」といいます。）上で提供するコンテンツにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>
            
            <div className={styles.privacyPolicy__policy}>
              <h3 className={styles.privacyPolicy__subheading}>個人情報の取り扱い</h3>
              <dl>
                <dt>1　個人情報の取得</dt>
                <dd>当社は、本サイトの運営に必要な範囲で、本サイトの一般利用者（以下「ユーザー」といいます。）から、ユーザーに係る個人情報を取得することがあります。</dd>
              </dl>

              <dl>
                <dt>2　個人情報の利用目的</dt>
                <dd>当社は、当社が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。<br />
                    ①　本サイトの運営、維持、管理<br />②　本サイトを通じたサービスの提供及び紹介<br />③　本サイトの品質・機能向上
                </dd>
              </dl>

              <dl>
                <dt>3　個人情報の提供等</dt>
                <dd>当社は、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。なお、本人の求めによる個人情報の開示、訂正、追加若しくは削除又は利用目的の通知については、法令に従いこれを行うとともに、ご意見、ご相談に関して適切に対応します。</dd>
              </dl>

              <dl>
                <dt>4　個人情報の利用目的の変更</dt>
                <dd>当社は、前項で特定した利用目的は、予め本人の同意を得た場合を除くほかは、原則として変更しません。但し、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲において、予め変更後の利用目的を公表の上で変更を行う場合はこの限りではありません。</dd>
              </dl>

              <dl>
                <dt>5　個人情報の第三者提供</dt>
                <dd>当社は、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行うこととします。</dd>
              </dl>

              <dl>
                <dt>6　個人情報の取扱いの改善・見直し</dt>
                <dd>当社は、個人情報の取扱い、管理体制及び取組みに関する点検を実施し、継続的に改善・見直しを行います。</dd>
              </dl>

              <dl>
                <dt>7　個人情報の廃棄</dt>
                <dd>当社は、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。</dd>
              </dl>

              <dl>
                <dt>8　SSL</dt>
                <dd>本サイトより個人情報をご提供いただく際は、通信途上における第三者の盗聴等を防止するため、SSL (Secure Sockets Layer)による暗号化技術を用い、安全に個人情報の送信をいただくことができます。</dd>
              </dl>

              <dl>
                <dt>9　Cookie（クッキー）</dt>
                <dd>当サイトでは、一部のコンテンツについてCookie（クッキー）を利用しています。当社は、本サイトの品質・機能向上やコンテンツの充実等を目的として、必要な範囲内で閲覧情報を取得する場合があります。<br />Cookieとは、ウェブサイトへアクセスした際にブラウザに保存される部分的な情報で、名前やメールアドレスなどの個人情報は含みません。ブラウザの設定により、Cookieを使用しないようにすることもできます。</dd>
              </dl>

              <dl>
                <dt>10　お問い合わせ</dt>
                <dd>〇〇株式会社<br />〒000-000<br />〇〇県〇〇市〇〇〇〇<br />TEL　~~~~~~~<br />担当　〇〇</dd>
              </dl>
            </div>
            <div className={styles.privacyPolicy__policy}>
              <h3 className={styles.privacyPolicy__subheading}>免責事項</h3>
              <p className={styles.privacyPolicy__policy__text}>当社は、コンテンツを掲載するにあたって、細心の注意を払っておりますが、コンテンツの内容が正確性及び安全性などについて保証するものではなく、本サイトをを利用されたこと、もしくは何らかの原因により利用することができなかったことによって生じるいかなる損害において、何ら責任を負うものではありません。また、当社はユーザーに通知することなく本サイトに掲載した情報の訂正、修正、追加、削除等をいつでも行うことができるものとします。〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p>
            </div>
            <div className={styles.privacyPolicy__policy}>
              <h3 className={styles.privacyPolicy__subheading}>著作権</h3>
              <p className={styles.privacyPolicy__policy__text}>本サイトに掲載されているすべてのコンテンツ（文章、画像、デザインなど）は、当社に帰属します。〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy
