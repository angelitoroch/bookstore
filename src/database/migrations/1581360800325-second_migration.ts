import {MigrationInterface, QueryRunner} from "typeorm";

export class secondMigration1581360800325 implements MigrationInterface {
    name = 'secondMigration1581360800325'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `User_details` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `lastname` varchar(255) NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp NOT NULL, `update_at` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `roles` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(20) NOT NULL, `description` text NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp NOT NULL, `update_at` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_roles` (`usersId` int NOT NULL, `rolesId` int NOT NULL, INDEX `IDX_99b019339f52c63ae615358738` (`usersId`), INDEX `IDX_13380e7efec83468d73fc37938` (`rolesId`), PRIMARY KEY (`usersId`, `rolesId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD `detail_id` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_9fc134ca20766e165ad650ee74` (`detail_id`)", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `update_at` `update_at` timestamp NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_9fc134ca20766e165ad650ee74` ON `users` (`detail_id`)", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_9fc134ca20766e165ad650ee740` FOREIGN KEY (`detail_id`) REFERENCES `User_details`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_99b019339f52c63ae6153587380` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_13380e7efec83468d73fc37938e` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_13380e7efec83468d73fc37938e`", undefined);
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_99b019339f52c63ae6153587380`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_9fc134ca20766e165ad650ee740`", undefined);
        await queryRunner.query("DROP INDEX `REL_9fc134ca20766e165ad650ee74` ON `users`", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `update_at` `update_at` timestamp NOT NULL DEFAULT ''0000-00-00 00:00:00''", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE current_timestamp()", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_9fc134ca20766e165ad650ee74`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `detail_id`", undefined);
        await queryRunner.query("DROP INDEX `IDX_13380e7efec83468d73fc37938` ON `user_roles`", undefined);
        await queryRunner.query("DROP INDEX `IDX_99b019339f52c63ae615358738` ON `user_roles`", undefined);
        await queryRunner.query("DROP TABLE `user_roles`", undefined);
        await queryRunner.query("DROP TABLE `roles`", undefined);
        await queryRunner.query("DROP TABLE `User_details`", undefined);
    }

}
