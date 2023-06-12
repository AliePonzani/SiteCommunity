import { Request, response, Response } from "express";
import { AuthUserService } from "../../Services/user/AuthUserService";

class AuthUserController {
    async handle(req:Request, res: Response){
        const {nome, email, senha} = req.body

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({
            nome,
            email,
            senha
        });
        return res.json(auth)
    }
}

export {AuthUserController}