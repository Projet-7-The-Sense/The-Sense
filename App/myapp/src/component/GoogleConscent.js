import { GoogleLogin } from "@react-oauth/google";
import { getUser } from "../api/google.api";

const GoogleConscent = () => {
    const responseMessage = (response) => {
        const result = getUser(response.credential);
        console.log(result);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
}

export default GoogleConscent;