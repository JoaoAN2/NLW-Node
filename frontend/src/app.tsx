import { useContext } from "react";
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import { NavBar } from "./components/NavBar";
import { MessageList } from "./components/MessageList";
import { MessageForm } from "./components/MessageForm";
import { Profile } from "./components/Profile";
import { AuthContext } from "./contexts/auth";
import { Container, Row } from "react-bootstrap";

export function App() {

    const { user, registerStatus } = useContext(AuthContext);
    
    return (
        
        <>
            { !user ? 
            
                (registerStatus ?  <RegisterForm /> : <LoginForm />)
                
                : 
                
                <>
                    <NavBar admin={ user.admin }/>

                    <Container>
                        <Row>
                            <MessageList />
                            <MessageForm />
                        </Row>
                    </Container>
                </>
            }
        </>
    
    );
}
