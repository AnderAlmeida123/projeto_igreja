/*
  Warnings:

  - You are about to drop the column `responsavel` on the `comunidade` table. All the data in the column will be lost.
  - You are about to drop the column `pessoasId` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `pessoasId` on the `endereco` table. All the data in the column will be lost.
  - You are about to drop the column `pessoasId` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the `membrosTurma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pessoas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `responsavelId` to the `comunidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `sacramento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_responsavel_fkey";

-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_pessoasId_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_pessoasId_fkey";

-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_membrosId_fkey";

-- DropForeignKey
ALTER TABLE "membrosTurma" DROP CONSTRAINT "membrosTurma_membrosTurmaId_fkey";

-- DropForeignKey
ALTER TABLE "membrosTurma" DROP CONSTRAINT "membrosTurma_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_pessoasId_fkey";

-- DropForeignKey
ALTER TABLE "setor" DROP CONSTRAINT "setor_reponsavel_fkey";

-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_profId_fkey";

-- AlterTable
ALTER TABLE "comunidade" DROP COLUMN "responsavel",
ADD COLUMN     "responsavelId" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "contato" DROP COLUMN "pessoasId",
ADD COLUMN     "pessoaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "endereco" DROP COLUMN "pessoasId",
ADD COLUMN     "pessoaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sacramento" DROP COLUMN "pessoasId",
ADD COLUMN     "pessoaId" TEXT NOT NULL;

-- DropTable
DROP TABLE "membrosTurma";

-- DropTable
DROP TABLE "pessoas";

-- CreateTable
CREATE TABLE "pessoa" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "sexo" TEXT NOT NULL,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membroTurma" (
    "id" TEXT NOT NULL,
    "membrosTurmaId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "membroTurma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_id_key" ON "pessoa"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_cpf_key" ON "pessoa"("cpf");

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_reponsavel_fkey" FOREIGN KEY ("reponsavel") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_membrosId_fkey" FOREIGN KEY ("membrosId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_profId_fkey" FOREIGN KEY ("profId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_membrosTurmaId_fkey" FOREIGN KEY ("membrosTurmaId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
