import React from 'react'

export const Precio = ({ euros, tiempo, corte }) => {
  return (
    <li>
      <div className="tarjeta-precio">
        <div className="info-pelado">
          <p>{euros} <i className="fas fa-euro-sign"></i></p>
          <p><i className="far fa-clock"></i>{tiempo} min</p>
        </div>
        <div className="nombre-pelado"><p>{corte}</p></div>
      </div>
    </li>
  )
}
