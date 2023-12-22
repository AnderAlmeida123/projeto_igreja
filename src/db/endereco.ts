import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface endereco {
  id?: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  referencia: string;
  pessoaId: string;
}

export async function create(data: endereco) {
  await prisma.$connect();
  const endereco = await prisma.endereco.create({
    data,
  });
  await prisma.$disconnect();
  return endereco;
}

export async function readAll() {
  await prisma.$connect();
  const enderecos = await prisma.endereco.findMany({
    include: {
      pessoa: true,
    },
  });
  await prisma.$disconnect();
  return enderecos;
}

export async function readOne(id: string) {
  await prisma.$connect();
  const endereco = await prisma.endereco.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return endereco;
}

export async function update(data: endereco) {
  await prisma.$connect();
  const endereco = await prisma.endereco.update({
    data,
    where: {
      id: data.id,
    },
  });
  await prisma.$disconnect();
  return endereco;
}

export async function deleteById(id: string) {
  await prisma.$connect();
  const endereco = await prisma.endereco.delete({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
}

export async function procuraCep(cep: string) {
  const url = `http://viacep.com.br/ws/${cep}/json`;
  const dados = await fetch(url);
  const localidade = await dados.json();
  return localidade;
}
