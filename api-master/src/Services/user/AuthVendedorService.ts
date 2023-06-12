import prismaClient from "../../prisma";
interface VendedorRequest {
    nome: string;
    email: string;
    senha: string;
}

class AuthVendedorService{
    async execute({ nome, email, senha }: VendedorRequest) {
        const user = await prismaClient.userVendedor.findFirst({
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

export {AuthVendedorService};