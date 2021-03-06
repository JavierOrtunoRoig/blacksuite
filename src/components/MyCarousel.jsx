import Carousel from 'react-elastic-carousel'
import peinado1 from '../static/peinado1.jpg'
import peinado2 from '../static/peinado2.jpg'
import peinado3 from '../static/peinado3.jpg'
import peinado4 from '../static/peinado4.jpg'
import { useRef, useState } from "react"
import styles from "../styles/myCarousel.module.css";
import translate from '../i18n/translate'


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
    <div id="carousel" className={styles.carousel} >
      <h2>{translate('ejemplosTitulo')}</h2>
      <Carousel
        enableAutoPlay={true}
        pagination={false}
        disableArrowsOnEnd={false}
        onChange={handleLastPhoto}
        ref={carouselRef}
        showArrows={false}
        transitionMs={2000}
        autoPlaySpeed={3000}
      >
        <img className={styles.ejemplo} src={peinado1} />
        <img className={styles.ejemplo} src={peinado2} />
        <img className={styles.ejemplo} src={peinado3} />
        <img className={styles.ejemplo} src={peinado4} />
      </Carousel>
    </div>
  )
}
