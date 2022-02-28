import { FormEvent, useState } from "react";
import { Form, FormControl, Modal, Button } from "react-bootstrap";
import { api } from "../../services/api";

type ModalProps = {
    show?: boolean
    onHide?: () => void
}

export function ModalTags(props: ModalProps) {

    const [tag, setTag] = useState<string>("");

    async function handleRegisterTag(event: FormEvent) {
        event.preventDefault();
        await api.post("/tags", { name: tag }).then(response => alert(`Tag cadastrada com sucesso: ${tag}`));
    }

    return (

        <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de Tags</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleRegisterTag}>
                <Modal.Body>
                    <FormControl placeholder="Insira a Tag que deseja cadastrar!" onChange={event => setTag(event.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Cadastrar Tag</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    
    )
}