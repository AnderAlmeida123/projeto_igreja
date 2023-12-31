import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface calendario {
  id?: string;
  dataHora: Date;
  tituloEvento: string;
  descricao: string;
  comunidadeId: string;
  tipoEventoId: string;
}

export async function create(data: calendario) {
  await prisma.$connect();
  const calendario = await prisma.calendario.create({
    data,
  });
  await prisma.$disconnect();
  return calendario;
}

export async function readAll() {
  await prisma.$connect();
  const calendarios = await prisma.calendario.findMany({
    include: {
      comunidade: true,
      tipoDoEvento: true,
    },
  });
  await prisma.$disconnect();
  return calendarios;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const calendario = await prisma.calendario.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return calendario;
}

export async function update(data: calendario) {
  await prisma.$connect();
  const calendario = await prisma.calendario.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return calendario;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const calendario = await prisma.calendario.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
