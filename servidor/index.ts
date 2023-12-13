import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    console.log("----- main iniciado - executando -----")
    console.log("executando")
 
    
    const pessoa = await prisma.pessoa.create({
        data:{
            nome:"",                   
            cpf:"",               
            dataNascimento: new Date(""),       
            sexo:"",
            contato:{
                create:{
                    celular:"",
                    telContato:"",
                    email:""
                }
            }
        }
    })
    console.dir(pessoa, {depth: null})

        // const pessoaBuscar = await prisma.pessoa.findMany()
        // console.dir(pessoaBuscar, {depth: null})

        // const pessoaAtualizar = await prisma.pessoa.update({
        //     where:{
        //         id:""
        //     },
        //     data:{
        //         nome:"",
        //         cpf:"",
        //         dataNascimento: new Date(""),
        //         sexo:""
        //     }
        // })

    // const pessoaDelete = await prisma.pessoa.delete({
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