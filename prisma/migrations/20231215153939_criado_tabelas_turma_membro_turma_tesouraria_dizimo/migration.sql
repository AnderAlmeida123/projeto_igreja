-- AlterTable
ALTER TABLE "pessoa" ADD COLUMN     "membroSetorId" TEXT,
ADD COLUMN     "membroTurmaId" TEXT;

-- CreateTable
CREATE TABLE "setor" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "setor" VARCHAR(255) NOT NULL,
    "responsavelId" TEXT,
    "comunidadeId" TEXT NOT NULL,

    CONSTRAINT "setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membroSetor" (
    "id" TEXT NOT NULL,
    "dataEntrada" DATE NOT NULL,
    "dataSaida" DATE NOT NULL,
    "setorId" TEXT NOT NULL,

    CONSTRAINT "membroSetor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turma" (
    "id" TEXT NOT NULL,
    "dataInicio" DATE NOT NULL,
    "dataTermino" DATE NOT NULL,
    "turma" VARCHAR(255) NOT NULL,
    "professorId" TEXT NOT NULL,
    "setorId" TEXT NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membroTurma" (
    "id" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "membroTurma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tesouraria" (
    "id" TEXT NOT NULL,
    "tipoMovimentacao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" MONEY NOT NULL,
    "dataMovimentacao" DATE NOT NULL,
    "comunidadeId" TEXT NOT NULL,
    "dizimoId" TEXT NOT NULL,

    CONSTRAINT "tesouraria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dizimo" (
    "id" TEXT NOT NULL,
    "meses" VARCHAR(255) NOT NULL,
    "valor" MONEY NOT NULL,
    "tipoPagamento" TEXT NOT NULL,
    "pessoaId" TEXT,

    CONSTRAINT "dizimo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "setor_id_key" ON "setor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "membroSetor_id_key" ON "membroSetor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "turma_id_key" ON "turma"("id");

-- CreateIndex
CREATE UNIQUE INDEX "membroTurma_id_key" ON "membroTurma"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tesouraria_id_key" ON "tesouraria"("id");

-- CreateIndex
CREATE UNIQUE INDEX "dizimo_id_key" ON "dizimo"("id");

-- AddForeignKey
ALTER TABLE "pessoa" ADD CONSTRAINT "pessoa_membroSetorId_fkey" FOREIGN KEY ("membroSetorId") REFERENCES "membroSetor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoa" ADD CONSTRAINT "pessoa_membroTurmaId_fkey" FOREIGN KEY ("membroTurmaId") REFERENCES "membroTurma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tesouraria" ADD CONSTRAINT "tesouraria_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tesouraria" ADD CONSTRAINT "tesouraria_dizimoId_fkey" FOREIGN KEY ("dizimoId") REFERENCES "dizimo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dizimo" ADD CONSTRAINT "dizimo_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
