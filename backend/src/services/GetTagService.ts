import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class GetTagService {

    async execute(tag_id: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tag = await tagsRepositories.findOne(tag_id);
        return classToPlain(tag);
    }

}

export { GetTagService };