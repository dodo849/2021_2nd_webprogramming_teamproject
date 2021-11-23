CREATE TABLE `wish` (
 `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `user_id` VARCHAR(20) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
 `food_id` INT NOT NULL
 );