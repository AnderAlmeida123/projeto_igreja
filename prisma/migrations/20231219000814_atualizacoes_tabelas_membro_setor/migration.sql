/*
  Warnings:

  - You are about to alter the column `tipoPagamento` on the `dizimo` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[setor]` on the table `setor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "dizimo" ALTER COLUMN "tipoPagamento" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "membroSetor" ALTER COLUMN "dataSaida" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "setor_setor_key" ON "setor"("setor");
