// import styles from './ButtomContact.module.scss'
import styles from './ButtomContact.module.scss'

export function ButtomContact() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      <span>Destroy</span>
    </button>
  )
}