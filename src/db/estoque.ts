import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface estoque {
  id?: string;
  produto: string;
  quantidade: string;
  setorId?: string;
  responsavelId?: string;
  comunidadeId: string;
}

export async function create(data: estoque) {
  await prisma.$connect();
  const estoque = await prisma.estoque.create({
    data,
  });
  await prisma.$disconnect();
  return estoque;
}

export async function readAll() {
  await prisma.$connect();
  const estoques = await prisma.estoque.findMany();
  await prisma.$disconnect();
  return estoques;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const estoque = await prisma.estoque.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return estoque;
}

export async function update(data: estoque) {
  await prisma.$connect();
  const estoque = await prisma.estoque.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return estoque;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const estoque = await prisma.estoque.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
