import { Col, Form, FormGroup } from "react-bootstrap";
import styles from "./styles.module.scss";
import userWithoutPhoto from "../../assets/userWithoutPhoto.png"
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export function MessageForm() {

    const { user } = useContext(AuthContext);

    return (
        
        <Col md="6">
            <div className={styles.userProfile}>
                <img src={userWithoutPhoto} alt="" className={styles.userPicture}/>

                <div className="text-center user-info">
                    <h2>{user?.name}</h2>
                    <span>{user?.id}</span>
                </div>
            </div>

            <Form className={styles.form}>
                <Form.Select className={styles.select}>
                    <option value="#">Selecione um usuário</option>
                    <option value="1">Usuário 1</option>
                </Form.Select>
                <FormGroup>
                    <textarea className="form-control"/>
                </FormGroup>
            </Form> 
        </Col>

    )
}