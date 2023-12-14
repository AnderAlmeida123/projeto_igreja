import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface pessoa {
  id?: string;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  sexo: string;
  comunidadeId: string;
}

export async function create(data: pessoa) {
  await prisma.$connect();
  const pessoa = await prisma.pessoa.create({
    data,
  });
  await prisma.$disconnect();
  return pessoa;
}

export async function readAll() {
  await prisma.$connect();
  const pessoas = await prisma.pessoa.findMany();
  await prisma.$disconnect();
  return pessoas;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const pessoa = await prisma.pessoa.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return pessoa;
}

export async function update(data: pessoa) {
  await prisma.$connect();
  const pessoa = await prisma.pessoa.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return pessoa;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const pessoa = await prisma.pessoa.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
