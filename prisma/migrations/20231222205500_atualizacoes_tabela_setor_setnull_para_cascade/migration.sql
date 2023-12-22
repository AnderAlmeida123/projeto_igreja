-- DropForeignKey
ALTER TABLE "setor" DROP CONSTRAINT "setor_responsavelId_fkey";

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
