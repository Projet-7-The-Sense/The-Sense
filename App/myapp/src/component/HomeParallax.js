import "../App.css";
import {Link} from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';

function HomeParallax() {
  return (
    <div className='parallax'>
      <button className='discover-button center' href='#banner'><img src='./img/DECOUVRIR.svg' alt='button discover image'/></button>
    </div>
  );
}

export default HomeParallax