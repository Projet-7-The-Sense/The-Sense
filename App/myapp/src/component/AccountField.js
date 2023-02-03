import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { updateUser } from '../api/user';
import { UserContext } from '../contexts/UserContext';
import { PasswordHash } from '../helpers';

const AccountField = (props) => {
    const { user } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log({...data})
        if (props.name == "password") {
            updateUser(user.id, { password: PasswordHash(data.password) });
        } else {
            updateUser(user.id, {...data});
        }
        console.log("updated");
    }

    return <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="accountField">
            <div className="inline-flex-box">
                <Form.Label className="field-title amiko-bold">{props.title}</Form.Label>
                <Form.Control className="field-control abel" {...register(props.name)} type={props.type} placeholder={props.value} />
                <Button variant="primary" className="amiko-bold" id="login-button" type="submit">Modifier</Button>
            </div>
        </Form.Group>
    </Form>
}

export default AccountField;