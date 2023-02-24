-- -----------------------------------------------------
-- Schema camp
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `camp` DEFAULT CHARACTER SET utf8 ;
USE `camp` ;

-- -----------------------------------------------------
-- Table `camp`.`sites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camp`.`sites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `availabity` TINYINT NOT NULL,
  `main_activity` VARCHAR(45) NOT NULL,
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
CREATE TABLE IF NOT EXISTS `camp`.`bookings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `check_in` VARCHAR(45) NOT NULL,
  `duration` INT NOT NULL,
  `campers_id` INT NOT NULL,
  `sites_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bookings_campers_idx` (`campers_id` ASC) VISIBLE,
  INDEX `fk_bookings_sites_idx` (`sites_id` ASC) VISIBLE,
  CONSTRAINT `fk_bookings_campers`
    FOREIGN KEY (`campers_id`)
    REFERENCES `camp`.`campers` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_booking_sites`
    FOREIGN KEY (`sites_id`)
    REFERENCES `camp`.`sites` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


