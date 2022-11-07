/*
  Warnings:

  - You are about to drop the column `Type` on the `Balance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Balance" DROP COLUMN "Type",
ADD COLUMN     "transactions" INTEGER[];
