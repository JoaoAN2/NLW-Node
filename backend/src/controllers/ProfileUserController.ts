import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {

    
    async handle(request: Request, response: Response) {
        
        type Profile = {
            id: string,
            name: string,
            email: string,
            admin: boolean,
            password?: string,
            created_at: Date,
            updated_at: Date
        };

        const { user_id } = request;
        const profileUserService = new ProfileUserService();
        const user:Profile | undefined = await profileUserService.execute(user_id);
        delete user?.password;

        return response.json(user);
    }

}

export { ProfileUserController };