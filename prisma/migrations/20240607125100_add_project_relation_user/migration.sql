/*
  Warnings:

  - You are about to drop the `verificationtokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `subscription` VARCHAR(191) NOT NULL DEFAULT 'FREE';

-- DropTable
DROP TABLE `verificationtokens`;

-- CreateTable
CREATE TABLE `projects` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
