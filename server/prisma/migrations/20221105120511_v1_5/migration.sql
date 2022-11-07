/*
  Warnings:

  - You are about to drop the column `transactions` on the `Balance` table. All the data in the column will be lost.
  - You are about to drop the column `withdrawl` on the `Balance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Balance" DROP COLUMN "transactions",
DROP COLUMN "withdrawl",
ADD COLUMN     "withdrawMoney" INTEGER;
