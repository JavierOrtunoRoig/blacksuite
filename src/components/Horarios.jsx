import styles from '../styles/horarios.module.css';

export default function Horarios() {
  return (
    <div id="horarios" className={styles.horarios}>

      <h2>Horarios</h2>

      <div className={styles['horarios-container']}>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>Lunes</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>Martes</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>Miércoles</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>Jueves</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>Viernes</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>Sábado</p>
          </div>
            <p>10:00 - 16:00</p>
        </div>
        <div className={styles['dia-container']}>
          <div className={styles.dia}>
            <p>Domingo</p>
          </div>
            <p style={{paddingLeft: '15px'}} >Cerrado</p>
        </div>
      </div>
      
    </div>
  )
}
