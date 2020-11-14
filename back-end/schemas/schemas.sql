USE ecommerce_project;
CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(255),
  `company_name` varchar(255),
  `adress` varchar(255),
  `logo_url` varchar(255),
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
CREATE TABLE `sold_item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `order_id` int,
  `Product_id` int,
  `price` varchar(255),
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
ALTER TABLE `sold_item` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);
ALTER TABLE `sold_item` ADD FOREIGN KEY (`Product_id`) REFERENCES `Product` (`id`);
ALTER TABLE `Product` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
ALTER TABLE `rating` ADD FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`);
ALTER TABLE `rating` ADD FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`);
ALTER TABLE `users` ADD FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
ALTER TABLE `Product` ADD `hide` varchar(255);
ALTER TABLE `category` ADD `hide` varchar(255);
ALTER TABLE `users` ADD `isDisable` varchar(255);

INSERT INTO role (id,type)values(1,"admin"),(2,"seller"),(3,"customer")
INSERT INTO users ( user_name,company_name,adress,logo_url,email,password,phone,role_id,created_at ) values
("admin","Chanay, Jeffrey A Esq","Nasds","//logo.clearbit.com","admin1@gmail.com","sad4as57d454","504-621-8927",1,now()),
("seller1","Chanay, Jeffrey A Esq","Naasdsds","//logo.clearbit.com","seller1@gmail.com","sad4as58d454","504-621-8937",2,now()),
("seller2","Chanay, Jeffrey A Esq","Negsagans","//logo.clearbit.com","seller2@gmail.com","sad4as46d454","504-621-8947",2,now()),
("seller3","Chanay, Jeffrey A Esq","Neqweqwens","//logo.clearbit.com","seller3@gmail.com","sad4as26d454","504-621-8957",2,now()),
("seller4","Chanay, Jeffrey A Esq","Nqwleans","//logo.clearbit.com","seller4@gmail.com","sad4as76d454","504-621-8967",2,now()),
("Josephine	Darakjy","Chemel, James L Cpa","Brighton","//logo.clearbit.com","josephine_darakjy@darakjy.org","sad4as56d455","810-292-9388",3,now()),
("Art	Venere","Feltz Printing Service","Bridgeport","//logo.clearbit.com","art@venere.org","sad4as56d456","856-636-8749",3,now()),
("Lenna	Paprocki","Printing Dimensions","Anchorage","//logo.clearbit.com","lpaprocki@hotmail.com","sad4as56d457","907-385-4412",3,now()),
("Donette	Foller","Chapman, Ross E Esq","Hamilton","//logo.clearbit.com","donette.foller@cox.net","sad4as56d458","513-570-1893",3,now()),
("Simona Morasca","Morlong Associates","Ashland","//logo.clearbit.com","simona@morasca.com","sad4as56d459","419-503-2484",3,now()),
("Mitsue Tollner","Commercial Press","Chicago","//logo.clearbit.com","mitsue_tollner@yahoo.com","sad4as56d460","773-573-6914",3,now()),
("Leota	Dilliard","Truhlar And Truhlar Attys","San Jose","//logo.clearbit.com","leota@hotmail.com","sad4as56d461","408-752-3500",3,now()),
("Sage Wieser","King, Christopher A Esq","Sioux Falls","//logo.clearbit.com","sage_wieser@cox.net","sad4as56d462","605-414-2147",3,now()),
("Kris Marrier","Dorl, James J Esq","Baltimore","//logo.clearbit.com","kris@gmail.com","sad4as56d463","410-655-8723",3,now()),
("Minna	Amigon","Rangoni Of Florence","Kulpsville","//logo.clearbit.com","minna_amigon@yahoo.com","sad4as56d464","215-874-1229",3,now()),
("Abel Maclead","Feiner Bros","Middle Island","//logo.clearbit.com","amaclead@gmail.com","sad4as56d465","631-335-3414",3,now()),
("Kiley	Caldarera","sads","Los Angeles","//logo.clearbit.com","kiley.caldarera@aol.com","sad4as56d466","310-498-5651",3,now()),
("assad","Benton, John B Jr","Chagrin Falls","//logo.clearbit.com","gruta@cox.net","sad4as56d467","440-780-8425",3,now())

INSERT INTO rating (customer_id,seller_id,rating_value) values(6,2,4),(7,2,4.5),(8,2,5),(9,3,4),(10,3,4.5),(11,3,5),(12,4,4),(13,4,4.5),(14,4,5),(15,5,4),(16,5,4.5),(17,5,5)

INSERT INTO category (name) values("Cell Phones"),("Laptops"),("Computers"),("Clothes"),("Books")

INSERT INTO `order` (customer_id,created_at) values(1,now()),(1,now()),(2,now()),(2,now()),(2,now())

INSERT INTO sold_item (order_id,Product_id,price,created_at) values
(1,1,1400,now()),
(1,2,1400,now()),
(1,3,1400,now()),
(1,4,1400,now()),
(1,5,1400,now()),
(2,1,2000,now()),
(2,2,2000,now()),
(2,3,2000,now()),
(2,4,2000,now()),
(2,5,2000,now()),
(3,1,1400,now()),
(3,2,1400,now()),
(3,3,1400,now()),
(3,4,1400,now()),
(3,5,1400,now()),
(4,1,1500,now()),
(4,2,1500,now()),
(4,3,1500,now()),
(4,4,1500,now()),
(4,5,1500,now()),
(5,1,1700,now()), 
(5,2,1700,now()), 
(5,3,1700,now()), 
(5,4,1700,now()), 
(5,5,1700,now()) 

INSERT INTO Product( name,price,description,newprice, quantity, seller_id,img_url,created_at,category_id ) values
("office laptops",600,"CORi5,4GRAM,GTX 1070,1TB HDD",null,5,2,"//logo.clearbit.com",now(),2),
("Windows Laptops",800,"ORi7,4GRAM,GTX 1070,1TB HDD",null,5,2,"//logo.clearbit.com",now(),2),
("Tower desktops",500,"ORi3,4GRAM,GTX 1070,1TB HDD",null,5,2,"//logo.clearbit.com",now(),3),
("All-in-One",700,"ORi5,8GRAM,GTX 1070,1TB HDD,128SSD",null,5,2,"//logo.clearbit.com",now(),3),
("Mac Desktops",1000,"ORi7,8GRAM,AMD,1TB HDD",null,5,2,"//logo.clearbit.com",now(),3),
("Samsung S20",1000,"comes with a 6.2-inch display. Under the hood is Snapdragon 865/Exynos 990 chipset with 12GB RAM and 128GB storage. The phone is powered by a 4000mAh battery.",null,5,2,"//logo.clearbit.com",now(),1),
("iphonX",1200,"The Apple iPhone X is easily the most advanced iPhone yet. Its stand-out design feature is the HDR-capable OLED display strethcing from edge to edge, while the back is made of glass instead of metal to allow wireless charging.",null,5,2,"//logo.clearbit.com",now(),1),
("iphon10",900,"The successor of the iPhone XS comes with a compact 5.8” Super Retina XDR display, which is brighter and displays wider color gamut. There’s a triple camera setup - a ultra wide-angle F2.4 snapper joins the F1.8 regular and F2.0 telephoto cameras.",null,5,2,"//logo.clearbit.com",now(),1),
("Huawei mate 40 pro",800,"6.8-inch OLED display with a 90HZ refresh rate, Kirin 9000 processor, 8GB RAM with 256GB storage combo, and 4400mAh battery. There is a triple-camera setup on the back with a 50MP main sensor, while the selfie shooter is 13MP",null,5,2,"//logo.clearbit.com",now(),1),
("Huawei P40 pro",700,"5G support, and 40-watt fast charging (both wired and wireless). Under the hood, the phone is powered by Huawei's own Kirin 990 chip and a battery cell as big as 4200mAh",null,5,2,"//logo.clearbit.com",now(),1)

