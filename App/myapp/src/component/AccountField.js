import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

const AccountField = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="accountField">
            <div className="inline-flex-box">
                <Form.Label className="field-title amiko-bold">{props.title}</Form.Label>
                <Form.Control className="field-control abel" {...register("field")} type={props.type} placeholder={props.value} />
                <Button variant="primary" className="amiko-bold" id="login-button" type="submit">Modifier</Button>
            </div>
        </Form.Group>
    </Form>
}

export default AccountField;