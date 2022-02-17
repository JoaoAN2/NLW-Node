import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth";


export function Profile() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <main>
            <h1>Logado com sucesso {user?.name}</h1>
            <h2>id: {user?.id}</h2>
            <Button variant="danger" onClick={signOut}>SignOut</Button>
        </main>

    );
}