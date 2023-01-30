import CollapsibleNavbar from "../component/CollapsibleNavbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Footer from "../component/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import { insertUser, alreadyExist } from "../api/user";

const Account = () => {
    const { user, userSet } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [ errorMessage, setErrorMessage ] = useState("");

    const onSubmit = (data) => {
        // Check if there is already an existing account under this email-adress
        const existFetched = alreadyExist(data.id);
        existFetched
            .then(result => {
                if (result) {
                    console.log("There is already an existing account under the following adress email: " + data.id);
                } else {
                    const response = insertUser(data.id, data.password, data.firstname, data.lastname, data.phone_number, data.age, data.reduction_points);
                    console.log("New account created!");
                    // Request the id of the created user to login instantly
                }
            }) 
            .catch(err => {
                console.error("There was an error fetching if there is already an existing account under the following email: " + data.id)
                return;
            });
    }

    return <>
        <CollapsibleNavbar />

        <div className="img-sign">
            <h1>MON COMPTE</h1>
        </div>

        {!user ? (
            <div className="form-sign">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                    <legend>Créer un compte</legend>
                    <div className="form-space">
                        <Row>
                        <Col lg={{ span: 2, offset: 4 }}>
                            <label htmlFor="firstname">Prénom</label>
                        </Col>
                        <Col lg="1">
                            <input {...register('firstname')}
                            type="text"
                            className="form-input"
                            id="firstname"
                            />
                        </Col>
                        </Row>

                    </div>
                    <div className="form-space">
                        <Row>
                        <Col lg={{ span: 2, offset: 4 }}>
                            <label htmlFor="lastname">Nom</label>
                        </Col>
                        <Col lg="1">
                            <input {...register('lastname')}
                            type="text"
                            className="form-input"
                            id="lastname"
                            />
                        </Col>
                        </Row>

                    </div>
                    <div className="form-space">
                        <Row>
                        <Col lg={{ span: 2, offset: 4 }}>
                            <label htmlFor="email">Adress e-mail</label>
                        </Col>
                        <Col lg="1">
                            <input {...register('id')}
                            type="text"
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
                                <input {...register('password')}
                                type="password"
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
                                <input {...register('confirmPassword')}
                                type="password"
                                className="form-input"
                                id="confirmPassword"
                            />
                            </Col>

                        </Row>
                    </div>
                    <div>
                        <div>
                            <FormControlLabel {...register('subscribeNewsletter')} control={<Checkbox  />} label="Souscrire à la newsletter" />
                        </div>
                        <div >
                            <Button type='submit'  variant="dark">Valider</Button>
                        </div>
                    </div>
                    </fieldset>
                </form>
            </div>
        ) : (
            <>
            <h1>{user.firstname} {user.lastname}</h1>
            </>
        ) }

        <Footer />
    </>

    return (<>
    
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