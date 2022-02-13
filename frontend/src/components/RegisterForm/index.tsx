import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

export function RegisterForm() {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ admin, setAdmin ] = useState(false);

    async function handleRegisterUser (event: FormEvent) {
        alert(`Nome: ${name}; \nEmail: ${email}; \nSenha: ${password}; \nAdmin: ${admin ? "É admin": "Não é Admin"}`);

        await api.post("/users", { name, email, password, admin });
    }

    return (
        <div className={styles.form}>

            <form onSubmit={handleRegisterUser}>
                <h1>Formulário de registro</h1>
                <input required type="text" id="name" name="name" onChange={event => setName(event.target.value)} placeholder="Nome Completo"/>
                <input required type="email" id="email" name="email" onChange={event => setEmail(event.target.value)} placeholder="Seu melhor email"/>
                <input required type="password" id="password" name="password" onChange={event => setPassword(event.target.value)} placeholder="*********"/>

                <div>
                    <h3>É admin?</h3>
                    
                    <label htmlFor="adminFalse">Falso</label>
                    <input type="radio" id="adminFalse" name="admin" onChange={event => setAdmin(false)} value="0"/>

                    <label htmlFor="adminTrue">Verdadeiro</label>
                    <input type="radio" id="adminTrue" name="admin" onChange={event => setAdmin(true)} value="1"/>
                </div>

                <div className={styles.submitButton}>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>

    )
    
}