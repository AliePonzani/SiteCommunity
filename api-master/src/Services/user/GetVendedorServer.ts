import { Request, Response } from "express";
import prismaClient from "../../prisma";

class GetVendedorServer {
  async execute(req: Request, res: Response) {
    const { email } = req.params;

    try {
      const vendedor = await prismaClient.userVendedor.findFirst({
        where: {
          email: email,
        },
      });

      if (!vendedor) {
        return res.status(404).json({ error: "Vendedor não encontrado." });
      }

      return res.json(vendedor);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar o vendedor." });
    }
  }
}

export { GetVendedorServer };
