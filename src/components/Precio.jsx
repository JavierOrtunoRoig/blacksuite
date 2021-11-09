import styles from '../styles/precio.module.css'

export const Precio = ({ euros, tiempo, corte }) => {
  return (
    <li>
      <div className={styles['tarjeta-precio']}>
        <div className={styles['info-pelado']}>
          <p>{euros} <i className="fas fa-euro-sign"></i></p>
          <p><i className="far fa-clock"></i>{tiempo} min</p>
        </div>
        <div className={styles['nombre-pelado']}><p>{corte}</p></div>
      </div>
    </li>
  )
}
