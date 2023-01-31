import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { logUser } from '../api/user';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useForm } from 'react-hook-form';
import { FaCog } from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';

const NavLoginModule = () => {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      const userFetched = logUser(data.id, data.password);
      userFetched
        .then(user => {
          setUser(user);
          sessionStorage.setItem('_id-token', user._id);
        })
        .catch(err => {
          console.log("Failed to login");
        })
    }

    const onLogout = () => {
      setUser(null);
      sessionStorage.removeItem('_id-token');
      console.log("Logged out");
    }

    const formatedReservation = (user) => {
      return "DARK ROOM - The Conjuring Experience";
    }

    const numberDict = [
      "une",
      "deux",
      "trois",
      "quatre",
      "cinq"
    ]
    
    const formatedCoupons = (number_coupons) => {
      if (number_coupons >= 10) {
        return "Votre prochaine réservation vous est offerte!";
      }
      else if (number_coupons == 5) {
        return "Profitez d'une réduction de 50% pour votre prochaine réservation!";
      }
      else {
        return "Plus qu" + (number_coupons == 1 ? "'une" : "e "+ (number_coupons < 5 ? numberDict[4-number_coupons] : numberDict[9-number_coupons]) ) + " réservation" + (number_coupons > 1 ? "s" : "") + " avant d'obtenir une " + (number_coupons < 5 ? " réduction de 50%" : " expérience gratuite") + "!";
      }
    }

    return <NavDropdown title={user ? "MON COMPTE" : "SE CONNECTER"} className='login-link line-text' id="collasible-nav-dropdown" autoClose="false">
    {!user ? (
      <Form className="login-dropdown" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="loginId">
          <div className="login-field">
            <Form.Label className="field-title amiko-bold">Identifiant</Form.Label>
            <Form.Control className="field-control abel" {...register("id")} type="email" placeholder="email" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <div className="login-field">
            <Form.Label className="field-title amiko-bold">Mot de passe</Form.Label>
            <Form.Control className="field-control abel" {...register("password")} type="password" placeholder="password" />
          </div>
        </Form.Group>

        <NavDropdown.Divider />
        
        <Button as={Link} to="/mon-compte" className="account-button" variant="white" type="redirect">Créer un compte</Button>
        <Button variant="dark" className="amiko-bold" id="login-button" type="submit">Se connecter</Button>
      </Form>
    ) : (
      <>
        <div id="hello-user" className="amiko-bold">{"Bonjour, "+user.firstname}</div>

        <NavDropdown.Divider />

        <div className="account-preview-data-inline">
          <div className="title amiko-bold">Réservation</div>
          <Link><div className="reservation amiko">{formatedReservation(user)} <BsArrowRight /></div></Link>
        </div>

        <div className="account-preview-data-inline points">
          <div className="title amiko-bold">Mes points</div>
          <div className="points amiko">{formatedCoupons(9)}</div>
        </div>

        <NavDropdown.Divider />

        <div className="account-preview-buttons">
          <Button as={Link} to="/mon-compte" id="cog-holder" className="account-button" variant="white" type="redirect">Accéder aux paramètres du compte <FaCog id="cog"/></Button>
          {user.admin?(
             <Button as={Link} to="/admin" id="cog-holder" className="account-button" variant="white" type="redirect">Admin panel </Button>
             ):(
              <></>
             )
          }
            
          <Button variant="danger" className="amiko-bold" onClick={onLogout}>Se déconnecter</Button>
        </div>
      </>)}
    </NavDropdown>
}

export default NavLoginModule;