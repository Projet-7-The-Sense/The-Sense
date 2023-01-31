import React from 'react';
import {   MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom'

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
          <div>
            <div className='split'>
                <Link as={Link} to='#modalites'>Modalités</Link>
                <div className='vertical-line'></div>
                <Link as={Link} to='#politique-de-confidentialite'>Politique de confidentialité</Link>
                <div className='vertical-line hidden-on-large'></div>
                <Link className='hidden-on-large' as={Link} to='#contact'>Contact</Link>
              </div>
          </div>
          <div >
            <div>
            <MDBBtn floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
            <MDBBtn floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
            <MDBBtn floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </MDBFooter>
  );
}