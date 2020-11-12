CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(255),
  `company_name` varchar(255),
  `adress` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `phone` varchar(255),
  `role_id` int,
  `created_at` timestamp
);

CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `Product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `price` varchar(255),
  `description` varchar(255),
  `newprice` varchar(255),
  `quantity` int,
  `seller_id` int,
  `img_url` varchar(255),
  `item_sales_id` int,
  `created_at` timestamp,
  `category_id` int
);

CREATE TABLE `order` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `customer_id` int,
  `created_at` timestamp
);

CREATE TABLE `role` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255)
);

CREATE TABLE `solid_item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `order_id` int,
  `created_at` timestamp
);

CREATE TABLE `rating` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `customer_id` int,
  `seller_id` int,
  `rating_value` int
);

ALTER TABLE `Product` ADD FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`);

ALTER TABLE `solid_item` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`item_sales_id`) REFERENCES `solid_item` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`category_id`) REFERENCES `categoty` (`id`);

ALTER TABLE `rating` ADD FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`);

ALTER TABLE `rating` ADD FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
