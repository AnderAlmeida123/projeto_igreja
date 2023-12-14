import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    console.log("----- main iniciado - executando -----")
    console.log("executando")
    const cliente = require("./rotas/cliente");
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