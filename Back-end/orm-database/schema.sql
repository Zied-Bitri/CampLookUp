-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema camp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema camp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `camp` DEFAULT CHARACTER SET utf8 ;
USE `camp` ;

-- -----------------------------------------------------
-- Table `camp`.`sites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camp`.`sites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `availibity` TINYINT NOT NULL,
  `main activity` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camp`.`campers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camp`.`campers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telnumber` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camp`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camp`.`booking` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `check-in` INT NOT NULL,
  `duration` INT NOT NULL,
  `campers_id` INT NOT NULL,
  `sites_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_booking_campers_idx` (`campers_id` ASC) VISIBLE,
  INDEX `fk_booking_sites1_idx` (`sites_id` ASC) VISIBLE,
  CONSTRAINT `fk_booking_campers`
    FOREIGN KEY (`campers_id`)
    REFERENCES `camp`.`campers` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_booking_sites1`
    FOREIGN KEY (`sites_id`)
    REFERENCES `camp`.`sites` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
