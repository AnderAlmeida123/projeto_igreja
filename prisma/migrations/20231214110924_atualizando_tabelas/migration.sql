/*
  Warnings:

  - You are about to drop the column `comunidade_id` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `data_hora` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_evento` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_evento_id` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `titulo_evento` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `responsavel` on the `comunidade` table. All the data in the column will be lost.
  - You are about to drop the column `pessoas_id` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `tel_contato` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `pessoas_id` on the `endereco` table. All the data in the column will be lost.
  - You are about to drop the column `data_hora_sacramento` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the column `local_sacramento` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the column `pessoas_id` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_sacramento_id` on the `sacramento` table. All the data in the column will be lost.
  - You are about to drop the `pessoas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_evento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_sacramento` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comunidadeId` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataHora` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoEvento` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoEventoId` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tituloEvento` to the `calendario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsavelId` to the `comunidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telContato` to the `contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataHoraSacramento` to the `sacramento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localSacramento` to the `sacramento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `sacramento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoSacramentoId` to the `sacramento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "calendario" DROP CONSTRAINT "calendario_comunidade_id_fkey";

-- DropForeignKey
ALTER TABLE "calendario" DROP CONSTRAINT "calendario_tipo_evento_id_fkey";

-- DropForeignKey
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_responsavel_fkey";

-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_pessoas_id_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_pessoas_id_fkey";

-- DropForeignKey
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_pessoas_id_fkey";

-- DropForeignKey
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_tipo_sacramento_id_fkey";

-- AlterTable
ALTER TABLE "calendario" DROP COLUMN "comunidade_id",
DROP COLUMN "data_hora",
DROP COLUMN "tipo_evento",
DROP COLUMN "tipo_evento_id",
DROP COLUMN "titulo_evento",
ADD COLUMN     "comunidadeId" TEXT NOT NULL,
ADD COLUMN     "dataHora" TIMESTAMP NOT NULL,
ADD COLUMN     "tipoEvento" TEXT NOT NULL,
ADD COLUMN     "tipoEventoId" TEXT NOT NULL,
ADD COLUMN     "tituloEvento" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "comunidade" DROP COLUMN "responsavel",
ADD COLUMN     "responsavelId" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "contato" DROP COLUMN "pessoas_id",
DROP COLUMN "tel_contato",
ADD COLUMN     "pessoaId" TEXT NOT NULL,
ADD COLUMN     "telContato" CHAR(11) NOT NULL;

-- AlterTable
ALTER TABLE "endereco" DROP COLUMN "pessoas_id",
ADD COLUMN     "pessoaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sacramento" DROP COLUMN "data_hora_sacramento",
DROP COLUMN "local_sacramento",
DROP COLUMN "pessoas_id",
DROP COLUMN "tipo_sacramento_id",
ADD COLUMN     "dataHoraSacramento" TIMESTAMP NOT NULL,
ADD COLUMN     "localSacramento" TEXT NOT NULL,
ADD COLUMN     "pessoaId" TEXT NOT NULL,
ADD COLUMN     "tipoSacramentoId" TEXT NOT NULL;

-- DropTable
DROP TABLE "pessoas";

-- DropTable
DROP TABLE "tipo_evento";

-- DropTable
DROP TABLE "tipo_sacramento";

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
CREATE TABLE "tipoSacramento" (
    "id" TEXT NOT NULL,
    "tipoSacramento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipoSacramento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoEvento" (
    "id" TEXT NOT NULL,
    "tipoEvento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipoEvento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_id_key" ON "pessoa"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_cpf_key" ON "pessoa"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "tipoSacramento_id_key" ON "tipoSacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipoEvento_id_key" ON "tipoEvento"("id");

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_tipoSacramentoId_fkey" FOREIGN KEY ("tipoSacramentoId") REFERENCES "tipoSacramento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_tipoEventoId_fkey" FOREIGN KEY ("tipoEventoId") REFERENCES "tipoEvento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
