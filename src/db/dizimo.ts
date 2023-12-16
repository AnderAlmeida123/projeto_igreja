import { Prisma, PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

interface dizimo {
  id?: string;
  meses: string;
  valor: Decimal;
  tipoPagamento: string;
  pessoaId: string;
}

export async function create(data: dizimo) {
  await prisma.$connect();
  const dizimo = await prisma.dizimo.create({
    data,
  });
  await prisma.$disconnect();
  return dizimo;
}

export async function readAll() {
  await prisma.$connect();
  const dizimos = await prisma.dizimo.findMany();
  await prisma.$disconnect();
  return dizimos;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const dizimo = await prisma.dizimo.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return dizimo;
}

export async function update(data: dizimo) {
  await prisma.$connect();
  const dizimo = await prisma.dizimo.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return dizimo;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const dizimo = await prisma.dizimo.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
