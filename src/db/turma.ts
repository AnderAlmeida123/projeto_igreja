import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface turma {
  id?: string;
  dataInicio: Date;
  dataTermino: Date;
  turma: string;
  setorId: string;
  professorId?: string;
}

export async function create(data: turma) {
  await prisma.$connect();
  const turma = await prisma.turma.create({
    data,
  });
  await prisma.$disconnect();
  return turma;
}

export async function readAll() {
  await prisma.$connect();
  const turmas = await prisma.turma.findMany();
  await prisma.$disconnect();
  return turmas;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const turma = await prisma.turma.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return turma;
}

export async function update(data: any) {
  await prisma.$connect();
  const turma = await prisma.turma.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return turma;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const turma = await prisma.turma.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
