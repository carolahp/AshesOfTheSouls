-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: ashes
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `price` int NOT NULL,
  `stock` smallint NOT NULL DEFAULT '0',
  `idMaterial` int DEFAULT NULL,
  `idKind` int DEFAULT NULL,
  `creationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idProduct`),
  KEY `FK_Product_Material_idx` (`idMaterial`),
  KEY `FK_Product_Kind_idx` (`idKind`),
  CONSTRAINT `FK_Product_Kind` FOREIGN KEY (`idKind`) REFERENCES `Kind` (`idKind`),
  CONSTRAINT `FK_Product_Material` FOREIGN KEY (`idMaterial`) REFERENCES `Material` (`idMaterial`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (1,'Rift Breaker Standard Cuff',300,3,1,NULL,'2022-11-11 12:42:44'),(2,'King of Kings Lion Pendant',450,10,1,NULL,'2022-11-11 12:42:44'),(3,'Treasure Hunter Skull Pendant',500,11,2,NULL,'2022-11-11 12:42:44'),(4,'Horned Skull Belt Buckle',1200,2,3,NULL,'2022-11-11 12:42:44'),(5,'Rift Breaker Standard Cuff',800,2,2,NULL,'2022-11-11 12:42:44'),(6,'Diamond Fire Forged Ring',300,4,1,NULL,'2022-11-07 12:42:44'),(7,'Large Open Jaw Skull Pendant',250,2,3,NULL,'2022-11-08 12:42:44'),(8,'Dark Matter Slab ',500,2,1,NULL,'2022-07-10 13:42:44'),(9,'Charred Ultra Nova Ring',600,5,2,NULL,'2022-04-10 13:42:44'),(10,'Solid Gold Half Jaw with Rubies Skull Ring',290,3,3,NULL,'2022-07-12 13:42:44');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-11 10:54:02
