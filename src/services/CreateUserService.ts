import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    numberAdmin?: string;
    password: string;
}

class CreateUserService {

    async execute({ name, email, numberAdmin = "0", password }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const admin = numberAdmin == "1";
        
        if (!email) {
            throw new Error("Incorrect Email");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });
        
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const passwordHash = await hash(password, 8);
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })
        await usersRepository.save(user);
        return user;
    }
}

export { CreateUserService }