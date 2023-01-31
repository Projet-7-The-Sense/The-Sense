import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { deleteUser } from "../api/user";
import { UserContext } from "../contexts/UserContext";

const DeleteAccountButton = () => {
    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        deleteUser(user.id);
        setUser(null);
        sessionStorage.removeItem('_id-token');
    }

    return <Button className="account-management-button" id="delete-account-button" variant="outline-danger" onClick={handleClick}>
        Supprimer le compte
    </Button>
}

export default DeleteAccountButton;