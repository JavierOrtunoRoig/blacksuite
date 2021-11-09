import translate from '../i18n/translate';
import styles from '../styles/horarios.module.css';

export default function Horarios() {
  return (
    <div id="horarios" className={styles.horarios}>

      <h2>{translate('horariosTitulo')}</h2>

      <div className={styles['horarios-container']}>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosLunes')}</p>
          </div>
            <p>10:00 - 20:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosMartes')}</p>
          </div>
            <p>10:00 - 20:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosMiercoles')}</p>
          </div>
            <p>10:00 - 20:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosJueves')}</p>
          </div>
            <p>10:00 - 20:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosViernes')}</p>
          </div>
            <p>10:00 - 20:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosSabado')}</p>
          </div>
            <p>10:00 - 13:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosDomingo')}</p>
          </div>
            <p style={{paddingLeft: '15px'}} >{translate('horariosCerrado')}</p>
        </div>
      </div>
      
    </div>
  )
}
