/*
 Create the table fiscalyear
 if necessary, change default Charset and/ collate
 */
CREATE TABLE `fiscalyear` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `state` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT = 28 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*
 Create the table account
 if necessary, change default Charset and/ collate
 */
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `level` int DEFAULT NULL,
  `order` int DEFAULT '0',
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_UNIQUE` (`order`)
) AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*
 Create the table budget
 if necessary, change default Charset and/ collate
 */
CREATE TABLE `budget` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` int NOT NULL,
  `year` int NOT NULL,
  `memo` varchar(255) DEFAULT NULL,
  `amount` decimal(7, 2) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniquekey` (`account`, `year`),
  KEY `account` (`account`),
  CONSTRAINT `budget_ibfk_1` FOREIGN KEY (`account`) REFERENCES `account` (`id`) ON UPDATE CASCADE
) AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*
 Create the table journal
 if necessary, change default Charset and/ collate
 */
CREATE TABLE `journal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `from_account` int DEFAULT NULL,
  `to_account` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `memo` varchar(255) DEFAULT NULL,
  `journalNo` int DEFAULT NULL,
  `amount` decimal(7, 2) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `receipt` longblob,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `from_account` (`from_account`),
  KEY `to_account` (`to_account`),
  CONSTRAINT `journal_ibfk_1` FOREIGN KEY (`from_account`) REFERENCES `account` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `journal_ibfk_2` FOREIGN KEY (`to_account`) REFERENCES `account` (`id`) ON UPDATE CASCADE
) AUTO_INCREMENT = 515 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci