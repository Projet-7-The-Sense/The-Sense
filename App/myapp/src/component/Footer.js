import React from 'react';
import {   MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBFooter>
      <div className='text-center p-3 footer-display'>
        <div className='footer-left-part'>
          <Link as={Link} to='#'>Nous Contacter</Link>
          <Link as={Link} to='#'>Réservation</Link>
          <Link as={Link} to='#faq'>FAQ</Link>
        </div>
        <div className='footer-mid-part'>
        © THE SENSE, SAS. Tous droits réservés
        </div>
        <div className='footer-right-part'>
            <div className='split'>
                <Link as={Link} to='#modalites'>Modalités</Link>
                <div className='vertical-line'></div>
                <Link as={Link} to='#politique-de-confidentialite'>Politique de confidentialité</Link>
                <div className='vertical-line hidden-on-large'></div>
                <Link className='hidden-on-large' as={Link} to='#contact'>Contact</Link>
            </div>
            <div>
              <a href=''><img src='../img/youtube_logo.png' alt='youtube_logo' /></a>
              <a href=''><img src='../img/instagram_logo.png' alt='instagram_logo'/></a>
              <a href=''><img src='../img/twitter_logo.png' alt='twitter_logo'/></a>
              <a href=''><img src='../img/facebook_logo.png' alt='facebook_logo'/></a>
            </div>
        </div>
      </div>
    </MDBFooter>
  );
}