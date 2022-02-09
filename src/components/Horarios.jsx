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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{margin: '0'}}>10:00 - 13:00</p>
              <p style={{margin: '0'}}>16:00 - 20:00</p>
            </div>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosMartes')}</p>
          </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{margin: '0'}}>10:00 - 13:00</p>
              <p style={{margin: '0'}}>16:00 - 20:00</p>
            </div>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosMiercoles')}</p>
          </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{margin: '0'}}>10:00 - 13:00</p>
              <p style={{margin: '0'}}>16:00 - 20:00</p>
            </div>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosJueves')}</p>
          </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{margin: '0'}}>10:00 - 13:00</p>
              <p style={{margin: '0'}}>16:00 - 20:00</p>
            </div>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosViernes')}</p>
          </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{margin: '0'}}>10:00 - 13:00</p>
              <p style={{margin: '0'}}>16:00 - 20:00</p>
            </div>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>{translate('horariosSabado')}</p>
          </div>
            <p>10:00 - 14:00</p>
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
