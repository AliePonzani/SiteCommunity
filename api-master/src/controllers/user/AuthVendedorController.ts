import { Request, response, Response } from "express";
import { AuthVendedorService } from "../../Services/user/AuthVendedorService";

class AuthVendedorController {
    async handle(req:Request, res: Response){
        const {nome, email, senha} = req.body

        const authVendedorService = new AuthVendedorService();

        const auth = await authVendedorService.execute({
            nome,
            email,
            senha
        });
        return res.json(auth)
    }
}

export {AuthVendedorController}