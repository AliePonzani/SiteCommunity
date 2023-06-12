import { Request, response, Response } from "express";
import { CreateVendedorServer } from "../../Services/user/CreateVendedorService";

class CreateVendedorConstroller {
    async handle(req: Request, res: Response) {
        const {
            nome,
            telefone,
            email,
            nomeLoja,
            cep,
            cidade,
            bairro,
            logradouro,
            estado,
            numero,
            complemento,
            senha
        } = req.body
        const createVendedorServer = new CreateVendedorServer();
        const user = await createVendedorServer.execute({
            nome,
            telefone,
            email,
            nomeLoja,
            cep,
            cidade,
            bairro,
            logradouro,
            estado,
            numero,
            complemento,
            senha
        });
        return res.json(user);
    }
}

export { CreateVendedorConstroller }