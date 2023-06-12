import prismaClient from "../../prisma";

interface UserRequest {
    nome: string;
    telefone: string;
    email: string;
    dataNac: string;
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    estado: string;
    numero: string;
    blocoTorre: string;
    apartamento: string;
    nomeCondominio: string;
    senha: string;
}

class CreateUserServer {
    async execute({
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
    }: UserRequest) {
        const userJaExiste = await prismaClient.user.findFirst({
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

        const user = await prismaClient.user.create({
            data: {
                nome: nome,
                telefone: telefone,
                email: email,
                dataNac: dataNac,
                cep: cep,
                cidade: cidade,
                bairro: bairro,
                logradouro: logradouro,
                estado: estado,
                numero: numero, 
                blocoTorre: blocoTorre, 
                apartamento: apartamento, 
                nomeCondominio: nomeCondominio,
                senha: senha
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        });

        return user;
    }
}

export { CreateUserServer };
