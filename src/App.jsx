import Contacto from "./components/Contacto"
import { Header } from "./components/Header"
import Horarios from "./components/Horarios"
import { ListaPrecios } from "./components/ListaPrecios"
import Mapa from "./components/Mapa"
import MyCarousel from "./components/MyCarousel"
import Navbar from "./components/Navbar"

import { useState } from 'react'
import { I18nProvider, LOCALES } from './i18n'

function App() {

  const [isSpanish, setIsSpanish] = useState(true);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  }

  return (
    <I18nProvider locale={ isSpanish ? LOCALES.SPANISH : LOCALES.ENGLISH }> 

      <div style={{ width: "100%", height: "56px" }}></div>

      <Navbar isSpanish={isSpanish} toggleLanguage={toggleLanguage} />
      <Header />

      <main >
        <MyCarousel />
        <ListaPrecios />
        <Horarios />
        <Mapa />
        <Contacto />
      </main>

    </I18nProvider>
  )
}

export default App
