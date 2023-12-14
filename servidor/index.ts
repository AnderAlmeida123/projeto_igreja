import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    console.log("----- main iniciado - executando -----")
    console.log("executando")
 
    
<<<<<<< HEAD
    // const pessoa = await prisma.pessoa.create({
    //     data:{
    //         nome:"ander",                   
    //         cpf:"123456",               
    //         dataNascimento: new Date("2002/02/10"),       
    //         sexo:"masculino",
    //         contato:{
    //             create:{
    //                 celular:"123456",
    //                 telContato:"123456",
    //                 email:"ander@123"
    //             }
    //         }
    //     }
    // })
    // console.dir(pessoa, {depth: null})
=======
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
>>>>>>> 6d8ebaa47def15ff668afdc1819286f72a25952c

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

<<<<<<< HEAD
    const pessoaDelete = await prisma.pessoa.delete({
        where:{
            id:"7dc39d5a-48fa-46da-82e9-7293782828e8"
        }
    })
    console.dir(pessoaDelete, {depth: null})
=======
    // const pessoaDelete = await prisma.pessoa.delete({
    //     where:{
    //         id:""
    //     }
    // })
    // console.dir(pessoaDelete, {depth: null})
>>>>>>> 6d8ebaa47def15ff668afdc1819286f72a25952c
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