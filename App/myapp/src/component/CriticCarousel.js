import "../App.css";
import Carousel from 'react-bootstrap/Carousel';


function CriticCarousel() {
  return (
    <div className="carousel-c">
      <Carousel fade>
        <Carousel.Item>
          <div className="center">
            <div className="size">
              <img
              
              src="/img/image 126.png"
              alt="First slide"
              />
            </div>
          </div>
          
          <Carousel.Caption>
            <p>"C’est la meilleure manière de faire découvrir l’expérience VR à vos enfants et vos grand-parents mais aussi de changer des perpétuels bowlings ou séance de cinéma du week-end"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="center">
            <div className="size">
              <img
              
              src="https://th.bing.com/th/id/OIP.C3sMw53wBP0astQFRuFGUgHaBt?pid=ImgDet&rs=1"
              alt="Second slide"
            />
            </div>
          </div>
          
          <Carousel.Caption>
            <p>"Bluffé par la qualité du service, que ce soit l’accueil et la prise en charge du groupe.
Quant à l’expérience, rien à dire, c’est une expérience unique au monde” </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="center">
            <div className="size">
              <img
              
              src="/img/image 126.png"
              alt="Third slide"
            />
            </div>
          </div>
          
          <Carousel.Caption>
            <p>
              "Bluffé par la qualité du service, que ce soit l’accueil et la prise en charge du groupe.
Quant à l’expérience, rien à dire, c’est une expérience unique au monde” 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CriticCarousel;