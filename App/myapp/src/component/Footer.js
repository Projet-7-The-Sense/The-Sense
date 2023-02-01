import React from 'react';
import {   MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaTwitter ,FaFacebookF } from 'react-icons/fa';

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
            <MDBBtn floating as={Link} to='' role='button' tag='a'>
              <FaYoutube />
            </MDBBtn>
            <MDBBtn floating as={Link} to='' role='button' tag='a'>
              <FaInstagram />
            </MDBBtn>
            <MDBBtn floating as={Link} to='' role='button' tag='a'>
              <FaTwitter/>
            </MDBBtn>
            <MDBBtn floating as={Link} to='' role='button' tag='a'>
              <FaFacebookF/>
            </MDBBtn>
            </div>
        </div>
      </div>
    </MDBFooter>
  );
}