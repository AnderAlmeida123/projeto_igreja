import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function create(data: any) {
  console.log(data);
  await prisma.$connect();
  const tipoSacramento = await prisma.tipoSacramento.create({
    data,
  });
  await prisma.$disconnect();
  return tipoSacramento;
}

export async function readAll() {
  await prisma.$connect();
  const tiposSacramento = await prisma.tipoSacramento.findMany();
  await prisma.$disconnect();
  return tiposSacramento;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const tipoSacramento = await prisma.tipoSacramento.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return tipoSacramento;
}

export async function update(data: any) {
  await prisma.$connect();
  const tipoSacramento = await prisma.tipoSacramento.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return tipoSacramento;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const tipoSacramento = await prisma.tipoSacramento.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}
