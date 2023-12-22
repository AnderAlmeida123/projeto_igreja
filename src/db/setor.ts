import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface setor {
  id?: string;
  descricao: string;
  setor: string;
  responsavelId?: string;
  comunidadeId: string;
}

export async function create(data: setor) {
  await prisma.$connect();
  const setor = await prisma.setor.create({
    data,
  });
  await prisma.$disconnect();
  return setor;
}

export async function readAll() {
  await prisma.$connect();
  const setores = await prisma.setor.findMany({
    include: {
      comunidade: true,
      responsavel: true,
    },
  });
  await prisma.$disconnect();
  return setores;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const setor = await prisma.setor.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return setor;
}

export async function update(data: setor) {
  await prisma.$connect();
  const setor = await prisma.setor.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return setor;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const setor = await prisma.setor.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
