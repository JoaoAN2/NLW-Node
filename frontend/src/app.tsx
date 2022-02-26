import { useContext } from "react";
import { LoginForm } from "./components/LoginForm";
import { Profile } from "./components/Profile";
import { RegisterForm } from "./components/RegisterForm";
import { AuthContext } from "./contexts/auth";
import { NavBar } from "./components/NavBar";

export function App() {

    const { user, registerStatus } = useContext(AuthContext);
    
    return (
        
        <>
            { !user ? (registerStatus ?  <RegisterForm /> : <LoginForm />)  : 
            <>
                <NavBar admin={user.admin}/>
                <Profile user = { user } />
            </>
            }
        </>

    );
}
