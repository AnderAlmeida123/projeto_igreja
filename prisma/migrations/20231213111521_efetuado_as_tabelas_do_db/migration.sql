-- CreateTable
CREATE TABLE "pessoas" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "sexo" TEXT NOT NULL,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contato" (
    "id" TEXT NOT NULL,
    "celular" CHAR(11) NOT NULL,
    "telContato" CHAR(11) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "pessoasId" TEXT NOT NULL,

    CONSTRAINT "contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" TEXT NOT NULL,
    "cep" CHAR(9) NOT NULL,
    "estado" VARCHAR(255) NOT NULL,
    "cidade" VARCHAR(255) NOT NULL,
    "bairro" VARCHAR(255) NOT NULL,
    "rua" VARCHAR(255) NOT NULL,
    "numero" CHAR(5) NOT NULL,
    "referencia" TEXT,
    "pessoasId" TEXT NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sacramento" (
    "id" TEXT NOT NULL,
    "localSacramento" TEXT NOT NULL,
    "dataHoraSacramento" TIMESTAMP NOT NULL,
    "pessoasId" TEXT NOT NULL,
    "tipoSacramentoId" TEXT NOT NULL,

    CONSTRAINT "sacramento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoSacramento" (
    "id" TEXT NOT NULL,
    "tipoSacramento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipoSacramento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunidade" (
    "id" TEXT NOT NULL,
    "comunidade" VARCHAR(100) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "responsavel" VARCHAR(100) NOT NULL,

    CONSTRAINT "comunidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendario" (
    "id" TEXT NOT NULL,
    "tipoEvento" TEXT NOT NULL,
    "dataHora" TIMESTAMP NOT NULL,
    "tituloEvento" VARCHAR(255) NOT NULL,
    "descricao" TEXT NOT NULL,
    "comunidadeId" TEXT NOT NULL,
    "tipoEventoId" TEXT NOT NULL,

    CONSTRAINT "calendario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoEvento" (
    "id" TEXT NOT NULL,
    "tipoEvento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipoEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setor" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "setor" VARCHAR(255) NOT NULL,
    "reponsavel" VARCHAR(100) NOT NULL,
    "comunidadeId" TEXT NOT NULL,

    CONSTRAINT "setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membroSetor" (
    "id" TEXT NOT NULL,
    "dataEntrada" DATE NOT NULL,
    "dataSaida" DATE NOT NULL,
    "setorId" TEXT NOT NULL,
    "membrosId" TEXT NOT NULL,

    CONSTRAINT "membroSetor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turma" (
    "id" TEXT NOT NULL,
    "dataInicio" DATE NOT NULL,
    "dataTermino" DATE NOT NULL,
    "turma" VARCHAR(255) NOT NULL,
    "profId" TEXT NOT NULL,
    "setorId" TEXT NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membrosTurma" (
    "id" TEXT NOT NULL,
    "membrosTurmaId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "membrosTurma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoas_id_key" ON "pessoas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pessoas_cpf_key" ON "pessoas"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "contato_id_key" ON "contato"("id");

-- CreateIndex
CREATE UNIQUE INDEX "endereco_id_key" ON "endereco"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sacramento_id_key" ON "sacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipoSacramento_id_key" ON "tipoSacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comunidade_id_key" ON "comunidade"("id");

-- CreateIndex
CREATE UNIQUE INDEX "calendario_id_key" ON "calendario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipoEvento_id_key" ON "tipoEvento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "setor_id_key" ON "setor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "membroSetor_id_key" ON "membroSetor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "turma_id_key" ON "turma"("id");

-- AddForeignKey
ALTER TABLE "contato"
 ADD CONSTRAINT "contato_pessoasId_fkey"
  FOREIGN KEY ("pessoasId") REFERENCES "pessoas"("id")
   ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_pessoasId_fkey" FOREIGN KEY ("pessoasId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_pessoasId_fkey" FOREIGN KEY ("pessoasId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_tipoSacramentoId_fkey" FOREIGN KEY ("tipoSacramentoId") REFERENCES "tipoSacramento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavel_fkey" FOREIGN KEY ("responsavel") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_tipoEventoId_fkey" FOREIGN KEY ("tipoEventoId") REFERENCES "tipoEvento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_reponsavel_fkey" FOREIGN KEY ("reponsavel") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_membrosId_fkey" FOREIGN KEY ("membrosId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_profId_fkey" FOREIGN KEY ("profId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membrosTurma" ADD CONSTRAINT "membrosTurma_membrosTurmaId_fkey" FOREIGN KEY ("membrosTurmaId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membrosTurma" ADD CONSTRAINT "membrosTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
