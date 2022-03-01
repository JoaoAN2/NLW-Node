import { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import userWithoutPhoto from "../../assets/userWithoutPhoto.png"
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { Message, User, Tag, AllDataMessage } from "../../types";
import styles from "./styles.module.scss";

export function MessageList() {

    const { user } = useContext(AuthContext);

    const [messages, setMessages] = useState<Message[]>([]);
    const [allDataMessages, setAllDataMessages] = useState<AllDataMessage[]>([]);
    const [tags, setTags] = useState<Tag[] | null>();
    const [users, setUsers] = useState<User[] | null>();

    useEffect(() => {
        async function fetchTags() {
            await api
            .get<Tag[]>(`tags`)
            .then(response => setTags(response.data));
        }

        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchUsers(){
            await api
            .get<User[]>(`users`)
            .then(response => setUsers(response.data));
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        async function fetchMessages() {
            await api
            .get<Message[]>("/users/compliments/receive")
            .then(response => setMessages(response.data));
        }

        fetchMessages();
    }, []);

    useEffect(() => {

        let auxListDataMessage: AllDataMessage[] = [];

        messages.forEach(message => {

            let dataMessage: AllDataMessage = {
                id: message.id,
                user_sender: users?.find(user => user.id === message.user_sender),
                user_receiver: users?.find(user => user.id === message.user_receiver),
                tag: tags?.find(tag => tag.id === message.tag_id),
                message: message.message,
                created_at: message.created_at
            }

            auxListDataMessage.push(dataMessage);
        });

        setAllDataMessages(auxListDataMessage);

    }, [messages])

    return (
        <Col md="6">
            <ul className={styles.messages}>

                {allDataMessages.map(message => { 
                    return(
                        <li key={message.id}>
                            <div>
                                <h4>{message.tag?.name_custom}</h4>
                                <span>{message.message}</span>
                                <div className={styles.userGroup}>
                                    <img src={userWithoutPhoto} alt="Usuário sem foto" width={32} className={styles.userPicture}/>
                                    <div className={styles.userInformation}>
                                        <span> {!!message.user_sender ? message.user_sender?.name : "Usuário não encontrado"}<br /></span>
                                        <span className={styles.id}>{!!message.user_sender ? message.user_sender?.id : "Usuário não encontrado"}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </Col>
        
    )

}