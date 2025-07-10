-- CreateTable
CREATE TABLE `UserTable` (
    `RobloxId` BIGINT NOT NULL,
    `Username` VARCHAR(25) NOT NULL,
    `DiscordId` BIGINT NOT NULL,
    `CreatedAt` DATETIME(0) NULL,
    `LastOnline` DATETIME(0) NULL,
    `IsOversight` BOOLEAN NULL,

    PRIMARY KEY (`RobloxId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
