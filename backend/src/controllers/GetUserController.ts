import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class GetUserController {
    async handle(request: Request, response: Response) {
        const user_id = String(request.query.user_id);
        const profileUserService = new ProfileUserService();
        const user = await profileUserService.execute(user_id);
        return response.json(user);
        
    }
}

export { GetUserController }
