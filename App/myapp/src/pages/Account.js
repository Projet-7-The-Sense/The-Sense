import CollapsibleNavbar from "../component/CollapsibleNavbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Footer from "../component/Footer";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import { createUser, alreadyExist } from "../api/user";
import AccountField from "../component/AccountField";
import NewsletterButton from "../component/NewsletterButton";
import DeleteAccountButton from "../component/DeleteAccountButton";
import { PasswordEncrypt } from "../helpers";

const Account = () => {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // Check if there is already an existing account under this email-adress
        const existFetched = alreadyExist(data.id);
        existFetched
            .then(result => {
                if (result) {
                    console.log("There is already an existing account under the following adress email: " + data.id);
                    return;
                }
                const userFetched = createUser(data.id, PasswordEncrypt(data.password), data.firstname, data.lastname, data.phone_number, data.age, data.subscribeNewsletter);
                userFetched
                    .then(newUser => {
                        setUser(newUser);
                        sessionStorage.setItem('_id-token', newUser._id);
                    })
                    .catch(err => console.error("Encountered an error while trying to connect you to your newly created account!"));
                console.log("New account created!");
            }) 
            .catch(err => {
                console.error("There was an error fetching if there is already an existing account under the following email: " + data.id)
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
                            <label htmlFor="email">Adresse e-mail</label>
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
            <div className="account-details-wrapper">
                <div className="container-reduced">
                    <AccountField title="Adresse e-mail" type="email" value={user.id} name="id"/>
                    <AccountField title="Mot de passe" type="password" value={"X".repeat(user.password.length)} name="password"/>
                    <div className="account-management-buttons-wrapper">
                        <NewsletterButton />
                        <DeleteAccountButton />
                    </div>
                </div>
            </div>
        ) }

        <Footer />
    </>
}

export default Account;