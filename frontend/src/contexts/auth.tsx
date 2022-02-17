import { createContext, FormEventHandler, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

const TOKEN_STORAGE = "@jao:token";

type User = {
    id: string,
    name: string,
    email: string,
    admin: boolean,
    created_at: Date,
    updated_at: Date
}

type AuthContextData = {
    user: User | null,
    signIn: (email: string, password: string) => void,
    signOut: () => void,
    registerStatus: boolean,
    setRegisterStatus: (registerStatus: boolean) => void;
}

type AuthResponse = string;

type AuthProvider = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {
    const [user, setUser] = useState<User | null>(null);
    const [registerStatus, setRegisterStatus] = useState<boolean>(false);
    
    async function signIn(email: string, password: string) {

        await api.post<AuthResponse>('login', {
            email,
            password
        })
        .then(async response => {
            const token = response.data;
            localStorage.setItem(TOKEN_STORAGE, token);
            api.defaults.headers.common.authorization = `Bearer ${token}`
            if (token) {
                await api
                .get<User>('/profile')
                .then(response => setUser(response.data));
            }
        })
        .catch(error => console.log(error.response.data.error));

    }

    function signOut() {
        setUser(null);
        localStorage.removeItem("@jao:token");
    }

    useEffect(() => {
        const token = localStorage.getItem("@jao:token");
        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            api.get<User>('/profile')
            .then(response => setUser(response.data))
            .catch(error => console.log(error.response.data.error));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user, signOut, registerStatus, setRegisterStatus }}>
            {props.children}
        </AuthContext.Provider>
    )

}
