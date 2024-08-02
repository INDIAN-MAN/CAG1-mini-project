-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 05:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c237_Liquorstock`
--
CREATE DATABASE IF NOT EXISTS `c237_Liquorstock` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `c237_Liquorstock`;

-- --------------------------------------------------------

--
-- Table structure for table `Liquors`
--

CREATE TABLE `Liquors` (
  `liquorId` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `LiquorType` varchar(200) NOT NULL,
  `LiquorName` varchar(200) NOT NULL,
  `Years` int(11) NULL,
  `Price` double(10,2) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Liquors`
--

INSERT INTO `Liquors` (`LiquorId`,`LiquorType`, `LiquorName`, `Years`, `Price`, `Quantity`,`image`) VALUES
(1, 'Whiskey', 'Chivas Regal 750ml', '12', '64.95','10', 'Chivas Regal 18.jpg'),
(2, 'Vodka','Grey Goose Vodka 1L', '0', '88.80', '15','https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/1p794i83d5vs53u3fowtcx78zejr?auto=webp&format=png'),
(3, 'Whiskey','Chivas Regal 750ml', '18', '114.95','5', 'https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/37lyood3t3ysoffyuhoar96f6ccu?auto=webp&format=jpg'),
(4, 'Gin','Hendricks Gin 700ml', '0', '79.95', '11','https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/sk9nhegmc6leubman8adwnp738vh?auto=webp&format=jpg'),
(5, 'Whiskey','Jack Daniels Old No. 7 Black Tennessee Whiskey 1L', '4', '86.95','7', 'https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/8knc067452r4x51c4j9r06sycweb?auto=webp&format=jpg'),
(6, 'Tequila','Clase Azul Tequila Reposado 700ml', '0', '414.95','8', 'https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/oh7teotgobzhiotacq5nzifmj7yq?auto=webp&format=jpg'),
(7, 'Rum','Bacardi Limon 1L', '0', '67.50','24', 'https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/ysyrx06e0bv2rs0j3i8v3bpmee4f?auto=webp&format=jpg'),
(8,'Beer', '6 x Corona Extra Beer Bottles Pack 355ml', '0', '16.95','45', 'https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/60ak7gvdkxzxhnokvltanqzemovk?auto=webp&format=jpg'),
(9,'Champagne', 'Moet & Chandon Imperial 750ml', '0', '76.95','10', 'https://paneco-sg-moonshine-production-s3-amazonaws-com.global.ssl.fastly.net/wnl0a9nx9k82cjm6399i8zjfz42x?auto=webp&format=jpg');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
