/*
  Warnings:

  - The primary key for the `membroSetor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `membroSetor` table. All the data in the column will be lost.
  - The primary key for the `membroTurma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `membroTurma` table. All the data in the column will be lost.
  - You are about to drop the column `membroSetorId` on the `pessoa` table. All the data in the column will be lost.
  - You are about to drop the column `membroTurmaId` on the `pessoa` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[turma]` on the table `turma` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `membroSetorId` to the `membroSetor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membroId` to the `membroTurma` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_setorId_fkey";

-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "pessoa" DROP CONSTRAINT "pessoa_membroSetorId_fkey";

-- DropForeignKey
ALTER TABLE "pessoa" DROP CONSTRAINT "pessoa_membroTurmaId_fkey";

-- DropIndex
DROP INDEX "membroSetor_id_key";

-- DropIndex
DROP INDEX "membroTurma_id_key";

-- AlterTable
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_pkey",
DROP COLUMN "id",
ADD COLUMN     "membroSetorId" TEXT NOT NULL,
ADD CONSTRAINT "membroSetor_pkey" PRIMARY KEY ("setorId", "membroSetorId");

-- AlterTable
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_pkey",
DROP COLUMN "id",
ADD COLUMN     "membroId" TEXT NOT NULL,
ADD CONSTRAINT "membroTurma_pkey" PRIMARY KEY ("turmaId", "membroId");

-- AlterTable
ALTER TABLE "pessoa" DROP COLUMN "membroSetorId",
DROP COLUMN "membroTurmaId";

-- AlterTable
ALTER TABLE "tesouraria" ALTER COLUMN "dizimoId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "estoque" (
    "id" TEXT NOT NULL,
    "produto" VARCHAR(255) NOT NULL,
    "quantidade" DECIMAL NOT NULL,
    "responsavelId" TEXT,
    "comunidadeId" TEXT NOT NULL,

    CONSTRAINT "estoque_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estoque_id_key" ON "estoque"("id");

-- CreateIndex
CREATE UNIQUE INDEX "turma_turma_key" ON "turma"("turma");

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_membroSetorId_fkey" FOREIGN KEY ("membroSetorId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
