import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface membroTurma {
  id?: string;
  membroTurma: string;
  turmaId: string;
}

export async function create(data: membroTurma) {
  await prisma.$connect();
  const membroTurma = await prisma.membroTurma.create({
    data,
  });
  await prisma.$disconnect();
  return membroTurma;
}

export async function readAll() {
  await prisma.$connect();
  const membroTurmas = await prisma.membroTurma.findMany();
  await prisma.$disconnect();
  return membroTurmas;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const membroTurma = await prisma.membroTurma.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return membroTurma;
}

export async function update(data: any) {
  await prisma.$connect();
  const membroTurma = await prisma.membroTurma.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return membroTurma;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const membroTurma = await prisma.membroTurma.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
