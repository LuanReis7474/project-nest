/*
  Warnings:

  - Made the column `end_time` on table `event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_time` on table `event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `end_time` VARCHAR(255) NOT NULL,
    MODIFY `start_time` VARCHAR(255) NOT NULL;
