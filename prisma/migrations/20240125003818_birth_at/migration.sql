/*
  Warnings:

  - Made the column `id_user` on table `event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `event_ibfk_1`;

-- AlterTable
ALTER TABLE `event` MODIFY `id_user` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `birthAt` DATE NULL;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
