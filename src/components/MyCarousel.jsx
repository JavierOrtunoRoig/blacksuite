import Carousel from 'react-elastic-carousel'
import peinado1 from '../static/peinado1.jpg'
import peinado2 from '../static/peinado2.jpg'
import peinado3 from '../static/peinado3.jpg'
import peinado4 from '../static/peinado4.jpg'
import { useRef, useState } from "react"

export default function MyCarousel() {

  const carouselRef = useRef();
  const [count, setCount] = useState(0);

  const handleLastPhoto = () => {

    setCount(prevValue => prevValue + 1);

    if (count === 2) {
      setTimeout(() => {
        carouselRef.current.goTo(0);
        setCount(0);
      }, 3000)
    }
  }


  return (
    <div id="carousel">
      <h2>Ejemplos de peinados</h2>
      <Carousel
        enableAutoPlay={true}
        pagination={false}
        disableArrowsOnEnd={false}
        onChange={handleLastPhoto}
        ref={carouselRef}
        showArrows={false}
      >
        <img src={peinado1} style={{ maxWidth: "90%" }} />
        <img src={peinado2} style={{ maxWidth: "90%" }} />
        <img src={peinado3} style={{ maxWidth: "90%" }} />
        <img src={peinado4} style={{ maxWidth: "90%" }} />
      </Carousel>
    </div>
  )
}
