import { Request, Response } from "express";
import { GetTagService } from "../services/GetTagService";

class GetTagController {
    async handle(request: Request, response: Response) {
        const tag_id = String(request.query.tag_id);
        const getTagService = new GetTagService();
        const tag = await getTagService.execute(tag_id);
        return response.json(tag);
        
    }
}

export { GetTagController }
