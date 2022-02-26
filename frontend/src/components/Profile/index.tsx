import { DateTools } from "../../tools/DateTools";
import { NavBar } from "../NavBar";
import { User } from "../../types";

interface ProfileProps {
    user: User
}

export function Profile({ user }: ProfileProps) {

    const dateTools = new DateTools();
    
    return (

        <main>
            <h1>Logado com sucesso {user.name}</h1>
            <h2>id: {user.id}</h2>
            <h2>email: {user.email}</h2>
            <h2>data de criação da conta: {dateTools.formatDateAndTime(user.created_at)}</h2>
            <h2>data de atualização da conta: {dateTools.formatDateAndTime(user.updated_at)}</h2>
        </main>

    );
}