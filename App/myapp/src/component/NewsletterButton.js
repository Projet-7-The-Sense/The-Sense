import Button from "react-bootstrap/esm/Button";
import { Checkbox } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { updateUser } from "../api/user";

const NewsletterButton = () => {
    const { user } = useContext(UserContext);
    const [ checked, setChecked ] = useState(user?user.newsletter : false);

    const handleUpdate = () => {
        setChecked(!checked);
    }

    useEffect(() => {
        updateUser(user.id, {newsletter: checked});
    }, [checked])

    return <Button id="newsletter-button" variant="outline-primary" onClick={handleUpdate}>
        <Checkbox color="primary" onChange={handleUpdate} checked={checked}/> <span>Newsletter</span>
    </Button>
}

export default NewsletterButton;