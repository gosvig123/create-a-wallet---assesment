/*
  Warnings:

  - You are about to drop the `Balance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Balance";

-- CreateTable
CREATE TABLE "balance" (
    "transactions" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "id" SERIAL NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "post" INTEGER,
    "withdrawl" INTEGER,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "balance_pkey" PRIMARY KEY ("id")
);
