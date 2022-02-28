import { useContext, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth";
import { VscSignOut } from "react-icons/vsc";
import { ModalTags } from "../ModalTags";

type NavBarProps = {
    admin?: Boolean
}

export function NavBar({ admin = false }: NavBarProps) {

    const { user, signOut } = useContext(AuthContext);
    const firstName = user?.name.slice(0, user?.name.indexOf(" "));

    const [ showModalTags, setShowModalTags ] = useState<boolean>(false);

    return (
        <Navbar bg="light" expand="lg" fixed="top" className="border-bottom">
            <Container>
                <Navbar.Brand className="justify-content-start" href="#home">{firstName}</Navbar.Brand>

                <div className="w-100 text-center">
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                </div>

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#" onClick={signOut}><VscSignOut size="32" /></Nav.Link>
                        <Nav.Link href="#" onClick={signOut} className="flex-wrap d-flex align-content-center">Logout</Nav.Link>
                        {admin ?
                        
                        <>
                            <NavDropdown title="Admin" id="basic-nav-dropdown" className="flex-wrap d-flex align-content-center">
                                <NavDropdown.Item href="#" onClick={() => setShowModalTags(true)}>Tags</NavDropdown.Item>
                                <ModalTags show={showModalTags} onHide={() => setShowModalTags(false)}/>
                                <NavDropdown.Item href="#action/3.2">Configurações</NavDropdown.Item>
                            </NavDropdown>
                        </> : 
                        
                        ""}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
