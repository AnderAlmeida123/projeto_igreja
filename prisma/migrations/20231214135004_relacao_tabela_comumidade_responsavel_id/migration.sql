-- DropForeignKey
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_responsavelId_fkey";

-- AlterTable
ALTER TABLE "comunidade" ALTER COLUMN "responsavelId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
