import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface sacramento {
  id?: string;
  localSacramento: string;
  dataHoraSacramento: Date;
  pessoaId: string;
  tipoSacramentoId: string;
}

export async function create(data: sacramento) {
  await prisma.$connect();
  const sacramento = await prisma.sacramento.create({
    data,
  });
  await prisma.$disconnect();
  return sacramento;
}

export async function readAll() {
  await prisma.$connect();
  const sacramentos = await prisma.sacramento.findMany({
    include: {
      pessoa: true,
      tipoSacramento: true,
    },
  });
  console.log(sacramentos);
  await prisma.$disconnect();
  return sacramentos;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const sacramento = await prisma.sacramento.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return sacramento;
}

export async function update(data: sacramento) {
  await prisma.$connect();
  const sacramento = await prisma.sacramento.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return sacramento;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const sacramento = await prisma.sacramento.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
