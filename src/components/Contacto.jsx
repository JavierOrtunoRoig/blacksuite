import styles from '../styles/contacto.module.css'

export default function Contacto() {
  return (
    <div id="contacto" className={styles.contacto}>
      <h2>Contacto</h2>

      <div className={styles.card}>
        <p className={styles['descripcion-contacto']}>
          ¿Tienes alguna duda? ¿Quieres pedirnos una cita? ¡No dudes en contactarnos!
        </p>
        <div className={styles['redes-sociales']}>
          <p>Puedes seguirnos en instagram para contactarnos y saber más de nosotros </p>
          <a
            href="https://www.instagram.com/blacksuitehairstudio/"
            target="_blank"
            className={styles.instagram}
          >
            <i className="fab fa-3x fa-instagram"></i>
          </a>
        </div>

        <div className={styles.cita}>
          <p>Si quieres pedir cita puedes llamarnos al:</p>
          <p><i className="fas fa-phone"></i> 65684616</p>
          <p> o puedes pedir una cita online </p>

          <a className={styles['button-cita']}
            href="https://widget.koibox.cloud/#/centro/blacksuite-sl?ref=facebook"
            target="_blank"
          >
            Pedir una cita
          </a>
        </div>
      </div>

    </div>
  )
}
