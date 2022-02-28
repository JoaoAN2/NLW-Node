export type User = {
    id: string,
    name: string,
    email: string,
    admin: boolean,
    created_at: Date,
    updated_at: Date
}

export type Tags = {
    id: string,
    name: string,
    created_at: Date,
    updated_at: Date,
    name_custom: string
}