import { Button, Col, Form, FormGroup } from "react-bootstrap";
import styles from "./styles.module.scss";
import userWithoutPhoto from "../../assets/userWithoutPhoto.png"
import { FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { User, Tag } from "../../types";

export function MessageForm() {
    const { user } = useContext(AuthContext);

    const [users, setUsers] = useState<User[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [tag, setTag] = useState<string>("");
    const [userReceiver, setUserReceiver] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {

        async function fetchUsers() {
            await api
            .get<User[]>("/users")
            .then(response => setUsers(response.data));
        }
        
        fetchUsers();
    }, []);

    useEffect(() => {

        async function fetchTags() {
            await api
            .get<Tag[]>("/tags")
            .then(response => setTags(response.data))
        }

        fetchTags();
    }, []);

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();
        
        await api
        .post("/compliments", {tag_id: tag, user_receiver: userReceiver, message})
        .then(response => alert("Mensagem enviada com sucesso para: " + users?.find(user => user.id === response.data.user_receiver)?.name))
        .catch(error => alert(error.response.data.error));
    }

    return (
        
        <Col md="6">
            <div className={styles.userProfile}>
                <img src={userWithoutPhoto} alt="" className={styles.userPicture}/>

                <div className="text-center user-info">
                    <h2>{user?.name}</h2>
                    <span>ID do usuário: {user?.id}</span>
                </div>
            </div>

            <Form className={styles.form} onSubmit={handleSendMessage}>
                <Form.Select className={styles.selectTag} onChange={event => setTag(event.target.value)}>
                    <option value="#">#Tag</option>
                    {
                        tags.map(tag => {
                            return (
                                <option key={tag.id} value={tag.id}>{tag.name_custom}</option>
                            );
                        })
                    }
                </Form.Select>
                <Form.Select className={styles.selectUser} onChange={event => setUserReceiver(event.target.value)}>
                    <option value="#">Selecione um usuário</option>
                    {
                        users.map(user => {
                            return (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            );
                        })
                    }
                </Form.Select>
                <FormGroup>
                    <textarea className="form-control" onChange={event => setMessage(event.target.value)}/>
                </FormGroup>
                <Button variant="danger" type="submit" className="mt-4 w-100">Enviar mensagem</Button>
            </Form> 
        </Col>

    )
}