import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface membroSetor {
  id?: string;
  dataEntrada: Date;
  dataSaida?: Date | null;
  setorId: string;
  membroSetorId: string;
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

export async function readOne(setorId: string, membroSetorId: string) {
  await prisma.$connect();
  const membroSetor = await prisma.membroSetor.findFirst({
    where: {
      AND: [
        {
          setorId,
        },
        {
          membroSetorId,
        },
      ],
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
      setorId_membroSetorId: {
        setorId: data.setorId,
        membroSetorId: data.membroSetorId,
      },
    },
  });
  await prisma.$disconnect();
  return membroSetor;
}

export async function deleteById(setorId: string, membroSetorId: string) {
  await prisma.$connect();
  const membroSetor = await prisma.membroSetor.delete({
    where: {
      setorId_membroSetorId: { setorId, membroSetorId },
    },
  });
  await prisma.$disconnect();
}
