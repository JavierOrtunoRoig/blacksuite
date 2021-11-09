
import translate from '../i18n/translate'

export default function Navbar({isSpanish, toggleLanguage}) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#inicio">Blacksuite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" >
                <a className="nav-link" aria-current="page" href="#inicio">{translate("navbarInicio")}</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#carousel">{translate("navbarEjemplo")} </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#precios">{translate("navbarPrecios")}</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#horarios">{translate("navbarHorarios")}</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#contacto">{translate("navbarContacto")}</a>
              </li>
            </ul>

            <ul className="navbar-nav idiomas">
              <li className={isSpanish ? 'nav-item active' : 'nav-item'}>
                <p onClick={ toggleLanguage } >Español</p>
              </li>
              <li className={isSpanish ? 'nav-item' : 'nav-item active'}>
                <p onClick={ toggleLanguage } >English</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
