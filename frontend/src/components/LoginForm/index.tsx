import { Button, Form, FormControl } from "react-bootstrap";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

export function LoginForm() {

    
    return (
        <main className={styles.login}>
            <Form>
                <h1>Formulário de login</h1>

                <FormControl type="email" placeholder="Email"/>
                <FormControl type="password" placeholder="********"/>
                <Button variant="danger" type="submit" >Fazer Login</Button>
            </Form>
        </main>
    )
    
}