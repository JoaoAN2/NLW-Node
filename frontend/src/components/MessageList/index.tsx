import { useContext } from "react";
import { Col } from "react-bootstrap";
import userWithoutPhoto from "../../assets/userWithoutPhoto.png"
import { AuthContext } from "../../contexts/auth";
import styles from "./styles.module.scss";

export function MessageList() {

    const { user } = useContext(AuthContext);

    const messages = [

        {
            id: "1",
            tag: "TAG",
            message: "Mensagem",
            user_name: "Nome do usuário",
            user_id: "ID do usuário"
        },
        {
            id: "2",
            tag: "Elogio",
            message: "Teste de mensagem",
            user_name: user?.name,
            user_id: user?.id
        }

    ]

    return (
        <Col md="6">
            <ul className={styles.messages}>

            {messages.map(message => { return(
                    <li key={message.id}>
                        <div>
                            <h4>{message.tag}</h4>
                            <span>{message.message}</span>
                            <div className={styles.userGroup}>
                                <img src={userWithoutPhoto} alt="Usuário sem foto" width={32} className={styles.userPicture}/>
                                <div className={styles.userInformation}>
                                    <span>{message.user_name} <br /></span>
                                    <span className={styles.id}>{message.user_id}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )})}{messages.map(message => { return(
                    <li key={message.id}>
                        <div>
                            <h4>{message.tag}</h4>
                            <span>{message.message}</span>
                            <div className={styles.userGroup}>
                                <img src={userWithoutPhoto} alt="Usuário sem foto" width={32} className={styles.userPicture}/>
                                <div className={styles.userInformation}>
                                    <span>{message.user_name} <br /></span>
                                    <span className={styles.id}>{message.user_id}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )})}{messages.map(message => { return(
                    <li key={message.id}>
                        <div>
                            <h4>{message.tag}</h4>
                            <span>{message.message}</span>
                            <div className={styles.userGroup}>
                                <img src={userWithoutPhoto} alt="Usuário sem foto" width={32} className={styles.userPicture}/>
                                <div className={styles.userInformation}>
                                    <span>{message.user_name} <br /></span>
                                    <span className={styles.id}>{message.user_id}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )})}{messages.map(message => { return(
                    <li key={message.id}>
                        <div>
                            <h4>{message.tag}</h4>
                            <span>{message.message}</span>
                            <div className={styles.userGroup}>
                                <img src={userWithoutPhoto} alt="Usuário sem foto" width={32} className={styles.userPicture}/>
                                <div className={styles.userInformation}>
                                    <span>{message.user_name} <br /></span>
                                    <span className={styles.id}>{message.user_id}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )})}{messages.map(message => { return(
                    <li key={message.id}>
                        <div>
                            <h4>{message.tag}</h4>
                            <span>{message.message}</span>
                            <div className={styles.userGroup}>
                                <img src={userWithoutPhoto} alt="Usuário sem foto" width={32} className={styles.userPicture}/>
                                <div className={styles.userInformation}>
                                    <span>{message.user_name} <br /></span>
                                    <span className={styles.id}>{message.user_id}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )})}{messages.map(message => { return(
                    <li key={message.id}>
                        <div>
                            <h4>{message.tag}</h4>
                            <span>{message.message}</span>
                            <div className={styles.userGroup}>
                                <img src={userWithoutPhoto} alt="Usuário sem foto" width={32} className={styles.userPicture}/>
                                <div className={styles.userInformation}>
                                    <span>{message.user_name} <br /></span>
                                    <span className={styles.id}>{message.user_id}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )})}

            </ul>
        </Col>
        
    )

}