import { useContext } from "react";
import { UserContext } from "../component/UserContext";

const Experiences = () => {
    const { user } = useContext(UserContext);

    return <>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <h1>
            {user ? (
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>
            ) : (
                <pre>
                    Not connected you slut!
                </pre>
            )
            }
        </h1>
    </>;
}

export default Experiences;