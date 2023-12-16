import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface membroSetor {
  id?: string;
  dataEntrada: Date;
  dataSaida: Date;
  setorId: string;
  membroSetor: string;
}

export async function create(data: membroSetor) {
  await prisma.$connect();
  const membroSetor = await prisma.membroSetor.create({
    data,
  });
  await prisma.$disconnect();
  return membroSetor;
}

export async function readAll() {
  await prisma.$connect();
  const membroSetores = await prisma.membroSetor.findMany();
  await prisma.$disconnect();
  return membroSetores;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const membroSetor = await prisma.membroSetor.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return membroSetor;
}

export async function update(data: any) {
  await prisma.$connect();
  const membroSetor = await prisma.membroSetor.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return membroSetor;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const membroSetor = await prisma.membroSetor.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
