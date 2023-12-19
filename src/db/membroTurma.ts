import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface membroTurma {
  id?: string;
  membroId: string;
  turmaId: string;
  status: string;
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

export async function readOne(membroId: string, turmaId: string) {
  await prisma.$connect();
  const membroTurma = await prisma.membroTurma.findFirst({
    where: {
      AND: [
        {
          membroId,
        },
        {
          turmaId,
        },
      ],
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
      turmaId_membroId: {
        membroId: data.membroId,
        turmaId: data.turmaId,
      },
    },
  });
  await prisma.$disconnect();
  return membroTurma;
}

export async function deleteById(turmaId: string, membroId: string) {
  await prisma.$connect();
  const membroTurma = await prisma.membroTurma.delete({
    where: {
      turmaId_membroId: {
        membroId,
        turmaId,
      },
    },
  });
  await prisma.$disconnect();
}
