import Contacto from "./components/Contacto"
import { Header } from "./components/Header"
import Horarios from "./components/Horarios"
import { ListaPrecios } from "./components/ListaPrecios"
import Mapa from "./components/Mapa"
import MyCarousel from "./components/MyCarousel"
import Navbar from "./components/Navbar"



function App() {

  return (
    <>
      <div style={{ width: "100%", height: "56px" }}></div>

      <Navbar />
      <Header />

      <main >
        <MyCarousel />
        <ListaPrecios />
        <Horarios />
        <Mapa />
        <Contacto />
      </main>
    </>
  )
}

export default App
