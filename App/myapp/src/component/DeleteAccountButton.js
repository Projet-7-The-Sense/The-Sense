import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { deleteUser } from "../api/user";
import { UserContext } from "../contexts/UserContext";

const DeleteAccountButton = () => {
    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        deleteUser(user.id);
        setUser(null);
    }

    return <Button id="delete-account-button" variant="outline-danger" onClick={handleClick}>
        Supprimer le compte
    </Button>
}

export default DeleteAccountButton;