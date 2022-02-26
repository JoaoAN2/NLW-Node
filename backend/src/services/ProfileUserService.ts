import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ProfileUserService {

    async execute(user_id: string) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = usersRepositories.findOne(user_id);
        return instanceToPlain(user);
    }

}

export { ProfileUserService }