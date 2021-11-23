CREATE TABLE `search_word` (
 `num` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `user_id` VARCHAR(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user (id),
 `search_word` VARCHAR(20) NOT NULL,
 `search_num` INT NOT NULL
 );