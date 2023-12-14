/*
  Warnings:

  - You are about to drop the column `comunidade` on the `comunidade` table. All the data in the column will be lost.
  - Added the required column `nomeComunidade` to the `comunidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comunidadeId` to the `pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_responsavelId_fkey";

-- AlterTable
ALTER TABLE "comunidade" DROP COLUMN "comunidade",
ADD COLUMN     "nomeComunidade" VARCHAR(100) NOT NULL,
ALTER COLUMN "responsavelId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "pessoa" ADD COLUMN     "comunidadeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "pessoa" ADD CONSTRAINT "pessoa_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
