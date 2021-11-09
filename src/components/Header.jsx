import styles from '../styles/inicio.module.css'
import translate from '../i18n/translate'

export const Header = () => {
  return (
    <header>
      <div id="inicio" className={styles.inicio}>
        <div className={styles['title-container']}>
          <h1 className={styles.title} > Blacksuite </h1>
          <p className={styles.subtitle} > {translate('inicioDescripcion')} </p>
        </div>
      </div>
    </header>
  )
}
