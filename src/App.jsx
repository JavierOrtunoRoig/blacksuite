import Contacto from "./components/Contacto"
import { Header } from "./components/Header"
import { ListaPrecios } from "./components/ListaPrecios"
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
        <Contacto />
      </main>
    </>
  )
}

export default App
