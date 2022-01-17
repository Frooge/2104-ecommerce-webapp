-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2022 at 02:14 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `CartID` int(16) NOT NULL,
  `UserID` int(16) NOT NULL,
  `OrderID` int(16) NOT NULL,
  `TotalPrice` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `DeliveryID` int(16) NOT NULL,
  `OrderID` int(16) NOT NULL,
  `UserID` int(16) NOT NULL,
  `ShippingAddress` varchar(50) NOT NULL,
  `DeliveryFee` int(16) NOT NULL,
  `DeliveryStatus` enum('Ongoing','Successful','Unsuccessful') NOT NULL,
  `TotalPrice` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `extras`
--

CREATE TABLE `extras` (
  `ExtrasID` int(16) NOT NULL,
  `ProductTypeID` int(16) NOT NULL,
  `AddOns` varchar(50) NOT NULL,
  `AddFee` int(16) NOT NULL,
  `Image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `extras`
--

INSERT INTO `extras` (`ExtrasID`, `ProductTypeID`, `AddOns`, `AddFee`, `Image`) VALUES
(1, 1, 'Boba', 10, 'NA');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `ItemID` int(16) NOT NULL,
  `ProductID` int(16) NOT NULL,
  `ExtrasID` int(16) NOT NULL,
  `CartID` int(16) NOT NULL,
  `PartialPrice` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OrderID` int(16) NOT NULL,
  `UserID` int(16) NOT NULL,
  `OrderDate` date NOT NULL,
  `PaymentMethod` enum('Delivery','WalkIn') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderID`, `UserID`, `OrderDate`, `PaymentMethod`) VALUES
(1, 1, '0000-00-00', 'Delivery');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` int(16) NOT NULL,
  `ProductTypeID` int(16) NOT NULL,
  `StoreID` int(16) NOT NULL,
  `ProductName` varchar(50) NOT NULL,
  `Size` varchar(18) NOT NULL,
  `Price` int(16) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `ProductImage` varchar(50) NOT NULL,
  `isAvailable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `ProductTypeID`, `StoreID`, `ProductName`, `Size`, `Price`, `Description`, `ProductImage`, `isAvailable`) VALUES
(1, 1, 1, 'Frogbitt', 'Regular', 1, 'ahhhg', '1641389672332.png', 1),
(2, 1, 1, 'Frogbitt', 'Large', 2, '', 'placeholder.png', 0),
(3, 2, 1, 'pls work', 'Regular', 1, '', 'placeholder.png', 1),
(4, 2, 1, 'pls work', 'Large', 2, '', 'placeholder.png', 1),
(5, 1, 1, 'frooger', 'Regular', 1, '', 'placeholder.png', 1),
(6, 1, 1, 'frooger', 'Large', 4, '', 'placeholder.png', 1),
(7, 3, 1, 'rule_', 'Regular', 32, '', 'placeholder.png', 1),
(8, 3, 1, 'rule_', 'Large', 25, '', 'placeholder.png', 1),
(9, 3, 1, 'try', 'Regular', 44, '', 'placeholder.png', 1),
(10, 3, 1, 'try', 'Large', 55, '', 'placeholder.png', 1),
(11, 3, 1, 'best snack', 'Large', 1000, 'delicios snack', '2104 ERD.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE `product_type` (
  `ProductTypeID` int(8) NOT NULL,
  `TypeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`ProductTypeID`, `TypeName`) VALUES
(1, 'Milktea'),
(2, 'Frappe'),
(3, 'Snack');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `StoreID` int(16) NOT NULL,
  `StoreName` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `BPermit` varchar(50) NOT NULL,
  `Image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`StoreID`, `StoreName`, `City`, `Address`, `BPermit`, `Image`) VALUES
(1, 'Mcford Milk Tea', 'Cebu City', '1469 Villalon Drive Capitol Site', 'NA', 'NA');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(16) NOT NULL,
  `UserTypeID` int(16) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Fullname` varchar(255) NOT NULL,
  `Birthdate` date NOT NULL,
  `Address` varchar(50) NOT NULL,
  `ContactNum` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `UserTypeID`, `Email`, `Password`, `Fullname`, `Birthdate`, `Address`, `ContactNum`) VALUES
(1, 3, 'admin@gmail.com', '1234', 'admin', '0000-00-00', 'N/A', 0),
(3, 1, 'j@gmail.com', '1234', 'Jade Rosales', '2022-01-16', 'Cebu City', 1234),
(4, 1, 'jade@gmail.com', '1234', 'Jade Rosales', '2022-01-16', 'Cebu City', 1234),
(5, 1, 'zyphedd@gmail.com', '1234', 'Reeee Rosales', '2022-01-16', 'Cebu City', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `UserTypeID` int(16) NOT NULL,
  `TypeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`UserTypeID`, `TypeName`) VALUES
(1, 'CUSTOMER'),
(2, 'OWNER'),
(3, 'ADMIN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`CartID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `OrderID` (`OrderID`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`DeliveryID`),
  ADD KEY `OrderID` (`OrderID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `extras`
--
ALTER TABLE `extras`
  ADD PRIMARY KEY (`ExtrasID`),
  ADD KEY `ProductTypeID` (`ProductTypeID`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`ItemID`),
  ADD KEY `ExtrasID` (`ExtrasID`),
  ADD KEY `CartID` (`CartID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `ProductTypeID` (`ProductTypeID`),
  ADD KEY `ProductName` (`ProductName`),
  ADD KEY `StoreID` (`StoreID`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`ProductTypeID`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`StoreID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `UserTypeID` (`UserTypeID`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`UserTypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `CartID` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `DeliveryID` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `extras`
--
ALTER TABLE `extras`
  MODIFY `ExtrasID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `ItemID` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `product_type`
--
ALTER TABLE `product_type`
  MODIFY `ProductTypeID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `StoreID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `UserTypeID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`);

--
-- Constraints for table `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`),
  ADD CONSTRAINT `delivery_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `extras`
--
ALTER TABLE `extras`
  ADD CONSTRAINT `extras_ibfk_1` FOREIGN KEY (`ProductTypeID`) REFERENCES `product_type` (`ProductTypeID`);

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`ExtrasID`) REFERENCES `extras` (`ExtrasID`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`CartID`) REFERENCES `carts` (`CartID`),
  ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ProductID`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`ProductTypeID`) REFERENCES `product_type` (`ProductTypeID`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`StoreID`) REFERENCES `stores` (`StoreID`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`UserTypeID`) REFERENCES `user_type` (`UserTypeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
