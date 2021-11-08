
export default function Horarios() {
  return (
    <div id="horarios">

      <h2>Horarios</h2>

      <div className="horarios-container">
        <div className="dia-container">
          <div className="dia">
            <p>Lunes</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className="dia-container">
          <div className="dia">
            <p>Martes</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className="dia-container">
          <div className="dia">
            <p>Miércoles</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className="dia-container">
          <div className="dia">
            <p>Jueves</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className="dia-container">
          <div className="dia">
            <p>Viernes</p>
          </div>
            <p>10:00 - 21:00</p>
        </div>
        <div className="dia-container">
          <div className="dia">
            <p>Sábado</p>
          </div>
            <p>10:00 - 16:00</p>
        </div>
        <div className="dia-container">
          <div className="dia">
            <p>Domingo</p>
          </div>
            <p style={{paddingLeft: '15px'}} >Cerrado</p>
        </div>
      </div>
      
    </div>
  )
}
