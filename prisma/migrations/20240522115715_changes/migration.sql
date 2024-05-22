/*
  Warnings:

  - You are about to drop the `Contacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Contacts` DROP FOREIGN KEY `Contacts_clientId_fkey`;

-- AlterTable
ALTER TABLE `Clients` ADD COLUMN `firstname` VARCHAR(191) NULL,
    ADD COLUMN `lastname` VARCHAR(191) NULL,
    ADD COLUMN `mobile` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Contacts`;
