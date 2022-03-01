export type User = {
    id: string,
    name: string,
    email: string,
    admin: boolean,
    created_at: Date,
    updated_at: Date
}

export type Tag = {
    id: string,
    name: string,
    created_at: Date,
    updated_at: Date,
    name_custom: string
}

export type Message = {
    id: string,
    user_sender: string,
    user_receiver: string,
    tag_id: string,
    message: string,
    created_at: Date
}

export type AllDataMessage = {
    id: string,
    user_sender: User | undefined,
    user_receiver: User | undefined,
    tag: Tag | undefined,
    message: string,
    created_at: Date
}