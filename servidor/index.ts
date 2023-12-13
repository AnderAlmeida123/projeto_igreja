import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    console.log("----- main iniciado - executando -----")
    console.log("executando")
 
    
    // const pessoa = prisma.pessoa.create({
    //     data:{
    //         nome:"",                   
    //         cpf:"",               
    //         dataNascimento: new Date(""),       
    //         sexo:""
    //     }
    // })
    // console.dir(pessoa, {depth: null})

        const pessoaBuscar = prisma.pessoa.findMany()
        console.dir(pessoaBuscar, {depth: null})

    // const pessoaDelete = prisma.pessoa.delete({
    //     where:{
    //         id:""
    //     }
    // })
    // console.dir(pessoaDelete, {depth: null})
}


main().then(async (e) => {
    await prisma.$disconnect()
    console.log("desconectar")
}).catch(async(e) =>{
    console.log(e)
    await prisma.$disconnect()
    console.log("desconectarError")
    process.exit(1)
})