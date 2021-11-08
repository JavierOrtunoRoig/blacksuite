import React from 'react'

export default function Contacto() {
  return (
    <div id="contacto">
      <h2>Contacto</h2>

      <div className="card">
        <p className="descripcion-contacto">
          ¿Tienes alguna duda? ¿Quieres contactarnos? ¡No dudes en llamarnos!
        </p>
        <div className="redes-sociales">
          <p>Puedes seguirnos en instagram para contactarnos y saber más de nosotros </p>
          <a
            href="https://www.instagram.com/blacksuitehairstudio/"
            target="_blank"
            id="instagram"
          >
            <i className="fab fa-3x fa-instagram"></i>
          </a>
        </div>

        <div className="cita">
          <p>Si quieres pedir cita puedes llamarnos al:</p>
          <p><i className="fas fa-phone"></i> 65684616</p>
          <p> o puedes pedir una cita online </p>

          <a className="button-cita"
            href="https://widget.koibox.cloud/#/centro/blacksuite-sl?ref=facebook"
            target="_blank"
          >
            Pedir cita online
          </a>
        </div>
      </div>

    </div>
  )
}
