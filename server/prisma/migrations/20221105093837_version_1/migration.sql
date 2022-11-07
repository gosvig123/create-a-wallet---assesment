-- CreateTable
CREATE TABLE "Balance" (
    "id" SERIAL NOT NULL,
    "balance" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "post" INTEGER,
    "withdrawl" INTEGER,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Type" INTEGER[],

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);
