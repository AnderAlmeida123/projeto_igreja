/*
  Warnings:

  - You are about to drop the column `dizimoId` on the `tesouraria` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tesouraria" DROP CONSTRAINT "tesouraria_dizimoId_fkey";

-- AlterTable
ALTER TABLE "estoque" ADD COLUMN     "setorId" TEXT;

-- AlterTable
ALTER TABLE "tesouraria" DROP COLUMN "dizimoId";

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE SET NULL ON UPDATE SET NULL;
