import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface contato {
  id?: string;
  celular: string;
  telContato: string;
  email: string;
  pessoaId: string;
}

export async function create(data: contato) {
  await prisma.$connect();
  const contato = await prisma.contato.create({
    data,
  });
  await prisma.$disconnect();
  return contato;
}

export async function readAll() {
  await prisma.$connect();
  const contatos = await prisma.contato.findMany();
  await prisma.$disconnect();
  return contatos;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const contato = await prisma.contato.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return contato;
}

export async function update(data: contato) {
  await prisma.$connect();
  const contato = await prisma.contato.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return contato;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const contato = await prisma.contato.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
