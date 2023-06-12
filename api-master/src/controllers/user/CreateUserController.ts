import { Request, response, Response } from "express";
import { CreateUserServer } from "../../Services/user/CreateUserService";

class CreateUserConstroller {
    async handle(req: Request, res: Response) {
        const {
            nome,
            telefone,
            email,
            dataNac,
            cep,
            cidade,
            bairro,
            logradouro,
            estado,
            numero,
            blocoTorre,
            apartamento,
            nomeCondominio,
            senha
         } = req.body
        const createUserServer = new CreateUserServer();
        const user = await createUserServer.execute({
            nome,
            telefone,
            email,
            dataNac,
            cep,
            cidade,
            bairro,
            logradouro,
            estado,
            numero,
            blocoTorre,
            apartamento,
            nomeCondominio,
            senha
        });
        return res.json(user);
    }
}

export { CreateUserConstroller }