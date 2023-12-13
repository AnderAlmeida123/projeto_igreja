/*
  Warnings:

  - You are about to drop the column `membrosTurmaId` on the `membroTurma` table. All the data in the column will be lost.
  - Added the required column `membroTurmaId` to the `membroTurma` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_membrosTurmaId_fkey";

-- AlterTable
ALTER TABLE "membroTurma" DROP COLUMN "membrosTurmaId",
ADD COLUMN     "membroTurmaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_membroTurmaId_fkey" FOREIGN KEY ("membroTurmaId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
