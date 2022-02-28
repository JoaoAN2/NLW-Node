import { Button, Col, Form, FormGroup } from "react-bootstrap";
import styles from "./styles.module.scss";
import userWithoutPhoto from "../../assets/userWithoutPhoto.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { User, Tags } from "../../types";

export function MessageForm() {

    const [users, setUsers] = useState<User[]>([]);
    const [tags, setTags] = useState<Tags[]>([]);

    useEffect(() => {

        async function getUsers() {
            await api
            .get<User[]>("/users")
            .then(response => setUsers(response.data));
        }
        
        getUsers();
    }, [])

    useEffect(() => {

        async function getTags() {
            await api
            .get<Tags[]>("/tags")
            .then(response => setTags(response.data))
        }

        getTags();
    }, [tags])

    const { user } = useContext(AuthContext);

    return (
        
        <Col md="6">
            <div className={styles.userProfile}>
                <img src={userWithoutPhoto} alt="" className={styles.userPicture}/>

                <div className="text-center user-info">
                    <h2>{user?.name}</h2>
                    <span>ID do usuário: {user?.id}</span>
                </div>
            </div>

            <Form className={styles.form}>
                <Form.Select className={styles.selectTag}>
                    <option value="#">#Tag</option>
                    {
                        tags.map(tag => {
                            return (
                                <option key={tag.id} value={tag.id}>{tag.name_custom}</option>
                            );
                        })
                    }
                </Form.Select>
                <Form.Select className={styles.selectUser}>
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
                    <textarea className="form-control"/>
                </FormGroup>
                <Button variant="danger" type="submit" className="mt-4 w-100">Enviar mensagem</Button>
            </Form> 
        </Col>

    )
}