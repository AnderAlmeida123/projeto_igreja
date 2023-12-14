async function main(){
    
    console.log("----- main iniciado - executando -----")
    console.log("executando")
    const pessoaCriacao = await prisma.pessoa.create({
        data:{
            nome:"ander",                   
            cpf:"123456",               
            dataNascimento: new Date("2002/02/10"),       
            sexo:"masculino",
            contato:{
                create:{
                    celular:"123456",
                    telContato:"123456",
                    email:"ander@123"
                }
            }
        }
    })
    console.dir(pessoaCriacao, {depth: null})

    const pessoaBuscar = await prisma.pessoa.findMany({
        include:{
            contato: true
        }
    })
    console.dir(pessoaBuscar, {depth: null})

    const pessoaAtualizar = await prisma.pessoa.update({
        where:{
            id:""
        },
        data:{
            nome:"",
            cpf:"",
            dataNascimento: new Date(""),
            sexo:""
        }
    })

    console.dir(pessoaAtualizar, {depth: null})


const pessoaDelete = await prisma.pessoa.delete({
    where:{
        id:"7dc39d5a-48fa-46da-82e9-7293782828e8"
    }
})
console.dir(pessoaDelete, {depth: null})
}

module.exports = main;
