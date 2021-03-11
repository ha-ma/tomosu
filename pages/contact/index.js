import React from 'react'
import styles from '../../styles/contact.module.scss'
import PageHero from '../../components/PageHero'

function Contact() {
  return (
    <>
      <PageHero />
      <section className={styles.contact}>
        <div className={styles.contact__container}>
          <p className={styles.contact__desc}>各種お問い合わせ、tomosuへの取材依頼・情報提供、<br />
             また、道東SDGs推進協議会への講演・ワークショップの企画など<br />お気軽にご相談・ご連絡ください。</p>

          <form className={styles.contact__form}>
            <h2 className={styles.contact__heading}>お問い合わせフォーム</h2>
            <div className={styles.contact__inputLine}>
              <dl>
                <dt><label htmlFor="input1">お名前(漢字)</label></dt>
                <dd><input type="text" id="input1" className={styles.contact__inputLine__input} placeholder="内容を入力して下さい" /></dd>
              </dl>
            </div>
            <div className={styles.contact__inputLine}>
              <dl>
                <dt><label htmlFor="input2">お名前(フリガナ)</label></dt>
                <dd><input type="text" id="input2" className={styles.contact__inputLine__input} placeholder="内容を入力して下さい" /></dd>
              </dl>
            </div>
            <div className={styles.contact__inputLine}>
              <dl>
                <dt><label htmlFor="input3">メールアドレス</label></dt>
                <dd><input type="text" id="input3" className={styles.contact__inputLine__input} placeholder="内容を入力して下さい" /></dd>
              </dl>
            </div>
            <div className={styles.contact__inputLine}>
              <dl>
                <dt><label htmlFor="input4">学校名・会社名</label></dt>
                <dd><input type="text" id="input4" className={styles.contact__inputLine__input} placeholder="内容を入力して下さい" /></dd>
              </dl>
            </div>
            <div className={styles.contact__inputLine}>
              <dl>
                <dt><label htmlFor="input5">お電話番号</label></dt>
                <dd><input type="text" id="input5" className={styles.contact__inputLine__input} placeholder="内容を入力して下さい" /></dd>
              </dl>
            </div>
            <div className={styles.contact__inputLine}>
              <dl>
                <dt><label htmlFor="input6">お問い合せの種類</label></dt>
                <dd>
                  <select className={styles.contact__inputLine__select}>
                    <option>——— 項目から選択してください</option>
                    <option>取材依頼・情報提供</option>
                    <option>講演・ワークショップの企画の相談講演・ワークショップの企画の相談講演・ワークショップの企画の相談講演・ワークショップの企画の相談</option>
                    <option>その他お問い合わせ</option>
                  </select>
                </dd>
              </dl>
            </div>
            <div className={styles.contact__inputLine}>
              <dl>
                <dt><label htmlFor="input6">お問い合せの内容</label></dt>
                <dd><textarea type="text" id="input6" className={styles.contact__inputLine__textarea} placeholder="内容を入力して下さい"></textarea></dd>
              </dl>
            </div>
            <div className={styles.contact__agree}>
              <dl>
                <dt>個人情報の取扱について</dt>
                <dd>
                  「同意する」をご記入いただいたお客様の情報は、大切に保管し、弊メディア及び道東SDGs推進協議会以外の事業体・団体等にお渡しすることはありません。
                  <label className={styles.contact__agree__label} htmlFor="input7">
                    <input type="checkbox" id="input7" className={styles.contact__agree__check} />
                    <span className={styles.contact__agree__span}>同意します</span>
                  </label>
                </dd>
              </dl>
            </div>
            <div className={styles.contact__submit}>
              <input type="submit" value="送信する" className={styles.contact__submit__button} />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
