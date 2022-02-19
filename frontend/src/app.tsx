import { useContext } from "react";
import { LoginForm } from "./components/LoginForm";
import { Profile } from "./components/Profile";
import { RegisterForm } from "./components/RegisterForm";
import { AuthContext } from "./contexts/auth";
export function App() {

    const { user, registerStatus } = useContext(AuthContext);
    
    return (
        
        <main>
            { !user ? (registerStatus ?  <RegisterForm /> : <LoginForm />)  : <Profile user={user} />}
        </main>


        // <RegisterForm />
    );
}