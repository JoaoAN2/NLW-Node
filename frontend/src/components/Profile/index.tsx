import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth";
import { DateTools } from "../../tools/DateTools";

type User = {
    id: string,
    name: string,
    email: string,
    admin: boolean,
    created_at: Date,
    updated_at: Date
}

interface ProfileProps {
    user: User
}

export function Profile({ user }: ProfileProps) {

    const { signOut } = useContext(AuthContext);
    const dateTools = new DateTools();
    
    return (

        <main>
            <h1>Logado com sucesso {user.name}</h1>
            <h2>id: {user.id}</h2>
            <h2>email: {user.email}</h2>
            <h2>data de criação da conta: {dateTools.formatDateAndTime(user.created_at)}</h2>
            <h2>data de atualização da conta: {dateTools.formatDateAndTime(user.updated_at)}</h2>
            <Button variant="danger" onClick={signOut}>SignOut</Button>
        </main>

    );
}