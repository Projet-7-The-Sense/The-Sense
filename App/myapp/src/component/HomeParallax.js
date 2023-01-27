import "../App.css";
import {Link} from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import { HashLink } from 'react-router-hash-link';

function HomeParallax() {
  return (
    <div className='parallax'>
      <a href='#banner'><button className='discover-button center' ><img src='./img/DECOUVRIR.svg' alt='button discover image'/></button></a>
    </div>
  );
}

export default HomeParallax