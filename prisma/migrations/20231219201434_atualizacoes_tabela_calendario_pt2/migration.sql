/*
  Warnings:

  - You are about to drop the column `tipoEvento` on the `calendario` table. All the data in the column will be lost.
  - Added the required column `status` to the `membroTurma` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_membroId_fkey";

-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_turmaId_fkey";

-- AlterTable
ALTER TABLE "calendario" DROP COLUMN "tipoEvento";

-- AlterTable
ALTER TABLE "membroTurma" ADD COLUMN     "status" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
