/*import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useForm } from 'react-hook-form';

const onSubmit = (data) => {
  console.log(data);
}

const handleChange = () => {

}

const handleLogout = () => {
  
}

const NavLoginModule = () => {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      const userFetched = logUser(data.id, data.password);
      userFetched
        .then(user => {
          setUser(user);
        })
        .catch(err => {
          console.log("Failed to login");
        })
    }
    
    console.log("UWU");

    const onLogout = () => {
      setUser(null);
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
            <Form.Label>Identifiant</Form.Label>
            <Form.Control {...register("id")} placeHolder="email" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <div className="login-field">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control {...register("password")} placeHolder="password" />
          </div>
        </Form.Group>
        <Button variant="dark" type="submit">Connexion</Button>
      </Form>
    )
      (<>
      <div className="tab-content">
        <form className="form-profile" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Connexion</legend>
            <div className="form-group">
              <Row>
                <Col lg='3'>
                  <label htmlFor="email">Identifiant</label>
                </Col>
                <Col lg='9'>
                    <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="email"
                    placeholder="mail@mail.fr"
                    onChange={handleChange}
                  />
                </Col>
              </Row>

            </div>
            <div className="form-group">
              <Row>
                  <Col lg='3'>
                    <label htmlFor="password">Mot de passe</label>
                  </Col>
                  <Col lg='9'>
                      <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
            </div>
            <div className="footer-connect">
              <Row >
                <Col lg={{ span: 4, offset: 3 }}>
                  <Link className="sign" to='/mon-compte'>Créer un compte</Link>
                </Col>
                <Col lg='5'>
                  <Button type='submit' variant="dark">Connexion</Button>
                </Col>
              </Row>
            </div>
            
            
          </fieldset>
        </form>
      </div>
      </>
    )) || (
      <>
      <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
      <NavDropdown.Item ><button className="btn btn-danger" onClick={handleLogout}>Déconnexion</button></NavDropdown.Item>
      </>
    )}
    
    <NavDropdown.Divider />

    </NavDropdown>
}

export default NavLoginModule;*/