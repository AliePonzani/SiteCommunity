import prismaClient from "../../prisma";
interface AuthRequest {
    nome: string;
    email: string;
    senha: string;
}

class AuthUserService{
    async execute({ nome, email, senha }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if(!user){
            throw new Error("Ususario invalido")
        }
        if(user.senha!==senha){
            throw new Error("Senha invalida")
        }
        return{
            nomeUsuario:user.nome
        }
    }
}

export {AuthUserService};