-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `bunga_detailFilm`;
CREATE DATABASE `bunga_detailFilm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bunga_detailFilm`;

DROP TABLE IF EXISTS `detailFilm`;
CREATE TABLE `detailFilm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomFilm` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descriptionFilm` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `prixFilm` float NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `detailFilm` (`id`, `nomFilm`, `descriptionFilm`, `prixFilm`) VALUES
(1,	'Star Wars épisode 1 : La Menace fantome',	'Un film avec des épées lumineuses',	10, '0000-00-00 00:00:00',	'0000-00-00 00:00:00');

-- 2020-06-05 12:29:52
