import prismaClient from "../../prisma";

interface VendedorRequest {
    nome: string;
    telefone: string;
    email: string;
    nomeLoja: string;
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    estado: string;
    numero: string;
    complemento: string;
    senha: string;
}

class CreateVendedorServer {
    async execute({
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
    }: VendedorRequest) {
        const userJaExiste = await prismaClient.userVendedor.findFirst({
            where: {
                email: email
            }
        });

        if (!email) {
            throw new Error("Email é obrigatório!");
        }

        if (userJaExiste) {
            throw new Error("Usuário já cadastrado!");
        }

        const createdUser = await prismaClient.userVendedor.create({
            data: {
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
            }
        });

        return createdUser;
    }
}

export { CreateVendedorServer };
