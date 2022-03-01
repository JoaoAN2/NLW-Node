import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserSendComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        
        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            },
            order: {
                created_at: "DESC"
            }
        });
        
        return compliments;
    }
}

export { ListUserSendComplimentsService }