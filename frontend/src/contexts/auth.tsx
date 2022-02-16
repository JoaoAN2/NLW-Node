import { createContext, ReactNode, useEffect, useState } from "react";
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
    signInUrl: string,
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

}
