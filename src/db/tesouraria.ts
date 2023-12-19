import { Prisma, PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

interface tesouraria {
  id?: string;
  tipoMovimentacao: string;
  descricao: string;
  valor: Decimal;
  dataMovimentacao: Date;
  comunidadeId: string;
}

export async function create(data: tesouraria) {
  await prisma.$connect();
  const tesouraria = await prisma.tesouraria.create({
    data,
  });
  await prisma.$disconnect();
  return tesouraria;
}

export async function readAll() {
  await prisma.$connect();
  const tesourarias = await prisma.tesouraria.findMany();
  await prisma.$disconnect();
  return tesourarias;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const tesouraria = await prisma.tesouraria.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return tesouraria;
}

export async function update(data: any) {
  await prisma.$connect();
  const tesouraria = await prisma.tesouraria.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return tesouraria;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const tesouraria = await prisma.tesouraria.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
