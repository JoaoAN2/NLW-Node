import { FormEvent, useContext, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth";
import styles from "./styles.module.scss";

export function LoginForm() {

    const { signIn, setRegisterStatus } = useContext(AuthContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        signIn(email, password);
    }
    
    return (
        <main className={styles.login}>

            <Form onSubmit={handleSignIn}>
                <h1>Formulário de login</h1>

                <FormControl type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                <FormControl type="password" placeholder="********" onChange={event => setPassword(event.target.value)}/>

                <div className={styles.submitButton}>
                    <Button type="submit" variant="danger" className="my-4">Fazer Login</Button>
                </div>

                <span>Ainda não possui uma conta? Faça o <a href="#" onClick={() => setRegisterStatus(true)}>Cadastro</a></span>
            </Form>
        </main>
    )
    
}