import "../App.css";
import {Link} from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';

function HomeParallax() {
  return (
    <Parallax className='parallax'>
      <img className='discover-button' href='#banner' src='./img/DECOUVRIR.svg' alt='button discover image'/>
    </Parallax>
  );
}

export default HomeParallax