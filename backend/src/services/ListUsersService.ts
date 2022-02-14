import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { instanceToPlain } from "class-transformer";

class ListUserService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = usersRepositories.find();
        return instanceToPlain(users);
    }
}

export { ListUserService }