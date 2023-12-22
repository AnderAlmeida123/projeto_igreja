import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface comunidade {
  id?: string;
  nomeComunidade: string;
  bairro: string;
  responsavelId?: string;
}

export async function create(data: comunidade) {
  await prisma.$connect();
  const comunidade = await prisma.comunidade.create({
    data,
  });
  await prisma.$disconnect();
  return comunidade;
}

export async function readAll() {
  await prisma.$connect();
  const comunidades = await prisma.comunidade.findMany({
    include: {
      responsavel: true,
    },
  });
  await prisma.$disconnect();
  return comunidades;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const comunidade = await prisma.comunidade.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return comunidade;
}

export async function update(data: comunidade) {
  await prisma.$connect();
  console.log(data);
  const comunidade = await prisma.comunidade.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return comunidade;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const comunidade = await prisma.comunidade.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
