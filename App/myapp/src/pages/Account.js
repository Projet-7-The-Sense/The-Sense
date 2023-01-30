import CollapsibleNavbar from "../component/CollapsibleNavbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Footer from "../component/Footer";

const Account = () => {
    return (<>
    
    <CollapsibleNavbar />
    <div className="img-sign">
        <h1>MON COMPTE</h1>
    </div>
    <div className="form-sign">
        <form>
            <fieldset>
            <legend>Créer un compte</legend>
            <div className="form-space">
                <Row>
                <Col lg={{ span: 2, offset: 4 }}>
                    <label htmlFor="name">Nom et prénom</label>
                </Col>
                <Col lg="1">
                    <input 
                    type="text"
                    name="name"
                    className="form-input"
                    id="name"
                    
                    
                    />
                </Col>
                </Row>

            </div>
            <div className="form-space">
                <Row>
                <Col lg={{ span: 2, offset: 4 }}>
                    <label htmlFor="email">Mon adresse mail</label>
                </Col>
                <Col lg="1">
                    <input
                    type="text"
                    name="username"
                    className="form-input"
                    id="email"
                    
                    
                    />
                </Col>
                </Row>

            </div>
            <div className="form-space">
                <Row>
                    <Col lg={{ span: 2, offset: 4 }}>
                    <label htmlFor="password">Mot de Passe</label>
                    </Col>
                    <Col lg="1">
                        <input
                        type="password"
                        name="password"
                        className="form-input"
                        id="password"
                        
                        
                    />
                    </Col>
                </Row>
            </div>
            <div className="form-space">
                <Row>
                    <Col lg={{ span: 2, offset: 4 }}>
                    <label htmlFor="password">Confirmation du mot de Passe</label>
                    </Col>
                    <Col lg="1">
                        <input
                        type="password"
                        name="cpassword"
                        className="form-input"
                        id="cpassword"
                        
                        
                    />
                    </Col>

                </Row>
            </div>
            <div>
                <div >
                    <Button type='submit'  variant="dark">Valider</Button>
                </div>
                <div>
                <FormControlLabel control={<Checkbox  />} label="Se désabonner de la newsletter" />
                </div>
            </div>

            
            
            </fieldset>
        </form>
    </div>
        <Footer/>
        </>
    );
}

export default Account;