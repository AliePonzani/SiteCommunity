import { Request, Response } from "express";
import prismaClient from "../../prisma";

class GetVendedoresServer {
    async execute(req: Request, res: Response) {

        try {
            const vendedores = await prismaClient.userVendedor.findMany(); // Busque todos os vendedores no banco de dados
            res.json(vendedores); // Envie os vendedores como resposta JSON
        } catch (error) {
            console.error('Erro ao buscar os vendedores:', error);
            res.status(500).json({ error: 'Erro ao buscar os vendedores' });
        }
    }
}

export { GetVendedoresServer };
