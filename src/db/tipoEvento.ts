import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface TipoEvento {
  id?: string;
  tipoEvento: string;
}

export async function create(data: TipoEvento) {
  await prisma.$connect();
  const tipoEvento = await prisma.tipoEvento.create({
    data,
  });
  await prisma.$disconnect();
  return tipoEvento;
}

export async function readAll() {
  await prisma.$connect();
  const tiposEvento = await prisma.tipoEvento.findMany();
  await prisma.$disconnect();
  return tiposEvento;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const tipoEvento = await prisma.tipoEvento.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return tipoEvento;
}

export async function update(data: TipoEvento) {
  await prisma.$connect();
  const tipoEvento = await prisma.tipoEvento.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return tipoEvento;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const tipoEvento = await prisma.tipoEvento.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
