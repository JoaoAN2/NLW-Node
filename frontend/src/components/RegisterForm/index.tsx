import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";
import { Button, Form, FormCheck, FormControl } from "react-bootstrap";
import styles from "./styles.module.scss";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { ReactNotifications, Store } from "react-notifications-component";
import { AuthContext } from "../../contexts/auth";

export function RegisterForm() {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ admin, setAdmin ] = useState(false);
    const { setRegisterStatus } = useContext(AuthContext);

    async function handleRegisterUser (event: FormEvent) {
        event.preventDefault();
        
        await api
        .post("/users", { name, email, password, admin })
        .then(response => {
            // alert(`Usuário cadastrado com sucesso!!\nNome: ${response.data.name}; \nEmail: ${response.data.email}; \nSenha: ${response.data.password}; \nAdmin: ${response.data.admin ? "É admin": "Não é Admin"}`)
            Store.addNotification({
                title: "Cadastro feito com sucesso!",
                message: "Usuário cadastrado com sucesso! Você será redirecionado para o Login!",
                type: "success",
                insert: "top",
                container: "top-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });
        })
        .catch(error => Store.addNotification({
            title: "Cadastro não autorizado!",
            message: error.response.data.error,
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
        }));
    }

    function handleRegisterStatus() {
        setRegisterStatus(false);
    }

    return (
        <div className={styles.form}>
                <Form onSubmit={handleRegisterUser}>

                    <h1>Formulário de registro</h1>
                    <FormControl required type="text" id="name" name="name" onChange={event => setName(event.target.value)} placeholder="Nome Completo"/>
                    <FormControl required type="email" id="email" name="email" onChange={event => setEmail(event.target.value)} placeholder="Seu melhor email"/>
                    <FormControl required type="password" id="password" name="password" onChange={event => setPassword(event.target.value)} placeholder="*********"/>

                    <div>
                        <h3>É admin?</h3>
                        
                        <FormCheckLabel htmlFor="adminFalse">Falso</FormCheckLabel>
                        <FormCheck inline className="mx-2" type="radio" id="adminFalse" name="admin" onChange={() => setAdmin(false)} value="0"/>

                        <FormCheckLabel htmlFor="adminTrue">Verdadeiro</FormCheckLabel>
                        <FormCheck inline className="mx-2" type="radio" id="adminTrue" name="admin" onChange={() => setAdmin(true)} value="1"/>
                    </div>

                    <div className={styles.submitButton}>
                        <Button type="submit" variant="primary" className="my-4">Enviar</Button>
                    </div>

                    <span>Já possui uma conta? <a href="#" onClick={handleRegisterStatus}>Faça login</a></span>

                    <ReactNotifications/>
                </Form>
                
        </div>

    )
    
}