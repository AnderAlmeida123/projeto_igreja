-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_membroSetorId_fkey";

-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_setorId_fkey";

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_membroSetorId_fkey" FOREIGN KEY ("membroSetorId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
