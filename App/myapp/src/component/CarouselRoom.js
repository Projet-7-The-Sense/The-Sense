import "../App.css";
import Carousel from 'react-bootstrap/Carousel';


function CarouselRoom() {
  return (
    <div className="carousel-r">
      <Carousel fade>
        <Carousel.Item>
          <img src="/img/Rectangle 94.svg" alt="First slide"/>
          <Carousel.Caption >
            <p>“C’est dingue, j’ai vraiment eu l’impression d’être transporté dans un autre monde. Avant je ne faisais pas d’expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j’ai pu traverser la frontière du réel.” - Denise, 23 Octobre 2020 -</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/Rectangle 94.svg" alt="Second slide"/>
          <Carousel.Caption>
            <p>“C’est dingue, j’ai vraiment eu l’impression d’être transporté dans un autre monde. Avant je ne faisais pas d’expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j’ai pu traverser la frontière du réel.” - Denise, 23 Octobre 2020 -</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
              <img src="/img/Rectangle 94.svg" alt="Third slide"/>
          <Carousel.Caption>
          <p>“C’est dingue, j’ai vraiment eu l’impression d’être transporté dans un autre monde. Avant je ne faisais pas d’expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j’ai pu traverser la frontière du réel.” - Denise, 23 Octobre 2020 -</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselRoom;