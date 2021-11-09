import styles from '../styles/inicio.module.css'

export const Header = () => {
  return (
    <header>
      <div id="inicio" className={styles.inicio}>
        <div className={styles['title-container']}>
          <h1 className={styles.title} > Blacksuite </h1>
          <p className={styles.subtitle} > Bienvenido a la nueva experiencia en el cuidado y la imagen del hombre </p>
        </div>
      </div>
    </header>
  )
}
