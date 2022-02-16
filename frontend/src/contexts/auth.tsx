import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

const TOKEN_STORAGE = "@jao:token";
const USER_STORAGE = "@jao:user";

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
    signOut(): () => void
}

type AuthResponse = {
    token: string,
    user: User
}

type AuthProvider = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {
    
    async function signIn(email: string, password: string) {
        const response = await api.post<AuthResponse>('login', {
            email,
            password
        });
    }

}
