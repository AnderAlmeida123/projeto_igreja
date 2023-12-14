/*
  Warnings:

  - You are about to drop the column `comunidadeId` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `dataHora` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `tipoEvento` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `tipoEventoId` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `tituloEvento` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `responsavelId` on the `comunidade` table. All the data in the column will be lost.
  - You are about to drop the column `pessoaId` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `telContato` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `pessoaId` on the `endereco` table. All the data in the column will be lost.
  - You are about to drop the column `dataHoraSacramento` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the column `localSacramento` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the column `pessoaId` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoSacramentoId` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the `membroSetor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `membroTurma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pessoa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `setor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipoEvento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipoSacramento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `turma` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comunidade_id` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_hora` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_evento` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_evento_id` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo_evento` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsavel` to the `comunidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoas_id` to the `contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel_contato` to the `contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoas_id` to the `endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_hora_sacramento` to the `sacramento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `local_sacramento` to the `sacramento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoas_id` to the `sacramento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_sacramento_id` to the `sacramento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "calendario" DROP CONSTRAINT "calendario_comunidadeId_fkey";

-- DropForeignKey
ALTER TABLE "calendario" DROP CONSTRAINT "calendario_tipoEventoId_fkey";

-- DropForeignKey
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_responsavelId_fkey";

-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_membrosId_fkey";

-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_setorId_fkey";

-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_membroTurmaId_fkey";

-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_tipoSacramentoId_fkey";

-- DropForeignKey
ALTER TABLE "setor" DROP CONSTRAINT "setor_comunidadeId_fkey";

-- DropForeignKey
ALTER TABLE "setor" DROP CONSTRAINT "setor_reponsavel_fkey";

-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_profId_fkey";

-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_setorId_fkey";

-- AlterTable
ALTER TABLE "calendario" DROP COLUMN "comunidadeId",
DROP COLUMN "dataHora",
DROP COLUMN "tipoEvento",
DROP COLUMN "tipoEventoId",
DROP COLUMN "tituloEvento",
ADD COLUMN     "comunidade_id" TEXT NOT NULL,
ADD COLUMN     "data_hora" TIMESTAMP NOT NULL,
ADD COLUMN     "tipo_evento" TEXT NOT NULL,
ADD COLUMN     "tipo_evento_id" TEXT NOT NULL,
ADD COLUMN     "titulo_evento" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "comunidade" DROP COLUMN "responsavelId",
ADD COLUMN     "responsavel" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "contato" DROP COLUMN "pessoaId",
DROP COLUMN "telContato",
ADD COLUMN     "pessoas_id" TEXT NOT NULL,
ADD COLUMN     "tel_contato" CHAR(11) NOT NULL;

-- AlterTable
ALTER TABLE "endereco" DROP COLUMN "pessoaId",
ADD COLUMN     "pessoas_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sacramento" DROP COLUMN "dataHoraSacramento",
DROP COLUMN "localSacramento",
DROP COLUMN "pessoaId",
DROP COLUMN "tipoSacramentoId",
ADD COLUMN     "data_hora_sacramento" TIMESTAMP NOT NULL,
ADD COLUMN     "local_sacramento" TEXT NOT NULL,
ADD COLUMN     "pessoas_id" TEXT NOT NULL,
ADD COLUMN     "tipo_sacramento_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "membroSetor";

-- DropTable
DROP TABLE "membroTurma";

-- DropTable
DROP TABLE "pessoa";

-- DropTable
DROP TABLE "setor";

-- DropTable
DROP TABLE "tipoEvento";

-- DropTable
DROP TABLE "tipoSacramento";

-- DropTable
DROP TABLE "turma";

-- CreateTable
CREATE TABLE "pessoas" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "sexo" TEXT NOT NULL,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_sacramento" (
    "id" TEXT NOT NULL,
    "tipo_sacramento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipo_sacramento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_evento" (
    "id" TEXT NOT NULL,
    "tipo_evento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipo_evento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoas_id_key" ON "pessoas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pessoas_cpf_key" ON "pessoas"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_sacramento_id_key" ON "tipo_sacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_evento_id_key" ON "tipo_evento"("id");

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_pessoas_id_fkey" FOREIGN KEY ("pessoas_id") REFERENCES "pessoas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_pessoas_id_fkey" FOREIGN KEY ("pessoas_id") REFERENCES "pessoas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_pessoas_id_fkey" FOREIGN KEY ("pessoas_id") REFERENCES "pessoas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_tipo_sacramento_id_fkey" FOREIGN KEY ("tipo_sacramento_id") REFERENCES "tipo_sacramento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavel_fkey" FOREIGN KEY ("responsavel") REFERENCES "pessoas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_comunidade_id_fkey" FOREIGN KEY ("comunidade_id") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_tipo_evento_id_fkey" FOREIGN KEY ("tipo_evento_id") REFERENCES "tipo_evento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
