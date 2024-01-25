-- CreateTable
CREATE TABLE `event` (
    `id_event` INTEGER NOT NULL AUTO_INCREMENT,
    `describe_event` TEXT NULL,
    `id_user` INTEGER NULL,
    `end_time` TIME(0) NULL,
    `start_time` TIME(0) NULL,

    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id_event`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `birthAt` DATE NOT NULL,

    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
