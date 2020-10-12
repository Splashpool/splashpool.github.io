-- MySQL dump 10.13  Distrib 8.0.21, for osx10.15 (x86_64)
--
-- Host: oasis.cpgnf1zc8lar.eu-west-2.rds.amazonaws.com    Database: oasis
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `Comment`
--

DROP TABLE IF EXISTS `Comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comment` (
  `facilityId` bigint(20) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `picture` blob,
  `rating` int(11) DEFAULT NULL,
  KEY `fk_commentFacility` (`facilityId`),
  CONSTRAINT `fk_commentFacility` FOREIGN KEY (`facilityId`) REFERENCES `Facility` (`facilityId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comment`
--

LOCK TABLES `Comment` WRITE;
/*!40000 ALTER TABLE `Comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Facility`
--

DROP TABLE IF EXISTS `Facility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Facility` (
  `facilityId` bigint(20) NOT NULL AUTO_INCREMENT,
  `locationId` bigint(20) NOT NULL,
  `street` varchar(100) DEFAULT NULL,
  `townPostCode` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `water` tinyint(1) DEFAULT NULL,
  `drinkable` tinyint(1) DEFAULT NULL,
  `largeWaterFacility` tinyint(1) DEFAULT NULL,
  `maleToilets` tinyint(1) DEFAULT NULL,
  `femaleToilets` tinyint(1) DEFAULT NULL,
  `largeToiletFacility` tinyint(1) DEFAULT NULL,
  `adminOrganisation` tinyint(1) DEFAULT NULL,
  `openingHours` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`facilityId`),
  KEY `Facility_LocationIdx` (`locationId`),
  KEY `Facility_Idx` (`street`,`townPostCode`,`city`,`country`),
  KEY `Facility_longLatIdx` (`longitude`,`latitude`),
  CONSTRAINT `fk_facilityLoc` FOREIGN KEY (`locationId`) REFERENCES `Location` (`locationId`)
) ENGINE=InnoDB AUTO_INCREMENT=300001 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Facility`
--

LOCK TABLES `Facility` WRITE;
/*!40000 ALTER TABLE `Facility` DISABLE KEYS */;
/*!40000 ALTER TABLE `Facility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Location`
--

DROP TABLE IF EXISTS `Location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Location` (
  `locationId` bigint(20) NOT NULL AUTO_INCREMENT,
  `street` varchar(100) DEFAULT NULL,
  `townPostCode` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `adminOrg` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`locationId`),
  KEY `Location_Idx` (`street`,`townPostCode`,`city`,`country`),
  KEY `Location_longLatIdx` (`longitude`,`latitude`)
) ENGINE=InnoDB AUTO_INCREMENT=600001 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
/*!40000 ALTER TABLE `Location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SavedLocation`
--

DROP TABLE IF EXISTS `SavedLocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SavedLocation` (
  `locationId` bigint(20) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`locationId`),
  UNIQUE KEY `SavedLocation_Uidx` (`email`,`locationId`),
  CONSTRAINT `fk_userLoc` FOREIGN KEY (`email`) REFERENCES `User` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SavedLocation`
--

LOCK TABLES `SavedLocation` WRITE;
/*!40000 ALTER TABLE `SavedLocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `SavedLocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `email` varchar(100) NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `countryCode` int(11) DEFAULT NULL,
  `mobileNumber` int(11) DEFAULT NULL,
  `adminUser` tinyint(1) DEFAULT '0',
  `organisation` varchar(100) DEFAULT NULL,
  `orgAddress1` varchar(255) DEFAULT NULL,
  `orgAddress2` varchar(255) DEFAULT NULL,
  `orgCity` varchar(100) DEFAULT NULL,
  `orgPostCode` varchar(20) DEFAULT NULL,
  `orgCountry` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-12 10:42:03
