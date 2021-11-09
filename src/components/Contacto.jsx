import translate from '../i18n/translate'
import styles from '../styles/contacto.module.css'

export default function Contacto() {
  return (
    <div id="contacto" className={styles.contacto}>
      <h2>{translate('contactoTitulo')}</h2>

      <div className={styles.card}>
        <p className={styles['descripcion-contacto']}>
          {translate('contactoDescripcion')}
        </p>
        <div className={styles['redes-sociales']}>
          <p>{translate('contactoInstagram')}</p>
          <a
            href="https://www.instagram.com/blacksuitehairstudio/"
            target="_blank"
            className={styles.instagram}
          >
            <i className="fab fa-3x fa-instagram"></i>
          </a>
        </div>

        <div className={styles.cita}>
          <p>{translate('contactoTelefono')}</p>
          <p><i className="fas fa-phone"></i> 633 36 89 83</p>
          <p>{translate('contactoOnline')}</p>

          <a className={styles['button-cita']}
            href="https://widget.koibox.cloud/#/centro/blacksuite-sl?ref=facebook"
            target="_blank"
          >
            {translate('contactoBoton')}
          </a>
        </div>
      </div>

    </div>
  )
}
