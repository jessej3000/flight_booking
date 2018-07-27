-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 27, 2018 at 01:41 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `planeseat`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `code` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `code`) VALUES
(1, 'Jesse', ''),
(2, 'Junsay', ''),
(5, 'higad', '9626e01d-9ac3-43e8-a1b3-2872625d4608'),
(6, 'Halo', '380490a3-ade3-4a3d-9de7-1ef56b9cc418'),
(7, 'Halor', '5277eeb2-c18e-4a0d-ae9b-f0e8d9565ea2'),
(8, 'Halor', '2789336c-4b10-44c4-878f-42459b6728f4'),
(9, 'Halo', '4cd9d194-de13-4b93-89b0-8e66bd6939d4'),
(10, 'a', '938a58c3-bad4-41e9-a201-0be8b7b137ec'),
(11, 'All', '1ebcf21d-2a10-466c-b20f-6b99e6c2b300'),
(12, 'aa', '3e1c1959-00d3-4a60-bb59-88f3a0437d47'),
(13, 'Hala', '05ee5b17-f6a3-480c-b25d-79a30caed0e0'),
(14, 'halont', '8cc5f9c7-80d5-4993-a172-e81857360e28'),
(15, 'fa', '1645aa8b-9a9a-4aac-8914-4789a90626c1'),
(16, 'adf', 'a0852d98-a1c0-491c-8a09-40d6ba49f165'),
(17, 'adffff', 'cb9f39ac-7f54-474a-b2ca-989dffa3d400'),
(18, 'ff', '5776cd85-0264-492b-a611-4f910836877e'),
(19, 'klj', '51e56c87-e818-40c4-88cd-a200d76280ab'),
(20, 'klj', '82bd3c84-223a-4c01-ae64-9ff91d0b4102'),
(21, 'Jakol', 'b9e9784e-3b0f-4e5e-84a4-3b3906d574e0'),
(22, 'Hala', '7c556c99-4072-4251-810a-624190b85b91'),
(23, 'faddf', 'a1a7e8bd-49fd-40bd-8f0e-abf25e8657eb'),
(24, 'Hadup', 'cc4b741c-7c3a-4825-aca2-e01950273000'),
(25, 'HAGITDA', 'c9f476c8-fab4-482f-8462-a80f70d65226'),
(26, 'jk', 'a3de7212-4ad9-4b1f-926a-828aca68c851'),
(27, 'jikokoko', 'f61c3872-572d-4e6b-a52b-92f068b38a1c'),
(28, 'Halo', '951c2c63-4b5f-4ef4-b560-a8fc50545771'),
(29, 'Hello', 'd861e47c-b280-43ba-b19d-3617f039f13c'),
(30, 'Hallo', '7717654e-b412-4f9d-868e-ecab3645287b'),
(31, 'Hello', '2a5e4336-9087-435f-9b65-28fc1c5c4f64'),
(32, 'powers', '55b9601b-d90f-49cf-b5ca-7f4043402cdf'),
(33, 'powersare', '102b15d8-191f-41c2-a7ee-9d4f8007c2e1'),
(34, 'Keep Swee', '4eb2733d-a1b6-4708-820b-72360ad79b95'),
(35, 'AHILEW', '78e58f9c-04ec-43c5-839b-c7517a27c74d'),
(36, 'Hi', 'a943046e-a912-44d9-abe8-46cf6876fe6c'),
(37, 'Halaka', 'b576c07a-8e8a-4a6f-98ba-e95311cc82e8'),
(38, 'catchyou', 'a27530ed-3c2b-4361-9bac-442affc05331'),
(39, 'dubol', '2e57efe0-951b-4b89-9c1b-b604937f6961'),
(40, 'medal', '21e10778-bbe9-4ab9-8998-55521ffd4949'),
(41, 'crazy', '3d86b123-c364-49c2-9a1b-a32fc67bb659'),
(42, 'doug', '81ae6ec5-cddc-4178-8761-aa84b960da35'),
(43, 'perhaps', 'acdfe741-8262-4cba-b171-f4c4d8c538d8'),
(44, 'head', 'de958c1a-1f92-4045-9334-7e269e588ba3'),
(45, 'DNA', 'd62424e9-ff56-43de-aada-e62ccd4f9c92'),
(46, 'toweyong', '88845f62-874b-46da-8b1e-4e67b33b1ad5'),
(47, 'hwhaw', '4fba4661-0c5f-4556-b30a-7ee96cc0fdc6'),
(48, 'ter', '60d4e24d-a1d6-4452-add5-2c6926ecff7b'),
(49, 'aaaa', '30117701-94d8-448f-88b0-039123aaf58e'),
(50, 'ahahaha', '18141994-cdf4-49be-ae36-688ccfb57274'),
(51, 'Denso wata', '6759f9b3-2673-47f9-a951-997b92b5a1c6'),
(52, 'Sopha', 'debf7bf3-c0c7-4e5c-b0c8-a388be5f3cfa'),
(53, 'Kalaw', 'b9bb3677-c362-4c4c-a760-530add456624'),
(54, 'hybrid', '30094337-bdde-43c5-bdce-5c1d955b06ac'),
(55, 'adf', '2c6e8214-588b-4b94-b21c-7b7ce8f81c91'),
(56, 'ahahaha', '1e73d3f0-e05e-4977-832e-f5fb4cd5c29f'),
(57, 'halo', '93fbf1db-9260-4ade-8462-e4937708e63c'),
(58, 'halo', '2c8f56db-7126-4def-a2a0-5b91385e3243'),
(59, 'dak', 'd053274d-8658-47e7-956b-7f3c6699b734'),
(60, 'dak', '2843f306-20ed-45f1-9774-f09d5fe52aef'),
(61, 'airlines', '13169944-5e5b-4108-91f8-61a6442b9fee'),
(62, 'yes', 'eb63339f-250b-49d4-a9ec-0b11c3f4a339'),
(63, 'hello', 'ea3d4ddf-8685-4fd2-944f-b298db639e4c'),
(64, 'hahah', '97a3a340-de60-4962-9e75-79dcfff6f2fc'),
(65, 'aaa', 'b7f1540d-a288-421f-962a-ebccd08b6bf7'),
(66, 'adf', '0ed70a3d-b0fa-43ae-9233-09510a3dc2f4'),
(67, 'hello', 'eabc71b5-1f0b-44fd-bd24-0f6c5ce8d6ad'),
(68, 'hhh', '2b0f76af-f085-4579-b8de-90ce4f3c5438'),
(69, 'hha', '7ec48345-036e-4f43-9824-872050c0e9a4'),
(70, 'selected', '48257749-5dd0-4bf0-b8e4-22be02a9faf7'),
(71, 'adsf', '72a72ebe-e0d5-498b-a400-3031df8bf498'),
(72, 'dfad', '1aafd04c-7c2d-4f20-a694-74c834994ae1'),
(73, 'fad', '3ca3493d-4859-4528-94ec-3df2a52e6c5f'),
(74, 'df', '1218780e-a9e0-4b7f-8ee3-94d71821a9ec'),
(75, 'fa', 'c9cbfc50-8a03-4c22-b0af-9fd8093f01a0'),
(76, 'dfgdfg', 'c164464f-4a09-4949-bf5b-8c64fd4ad9cb'),
(77, 'fadf;lk', '980d3cac-8ac0-45f3-8784-b9b8f411fc25'),
(78, 'alsdkfjasdf', 'c6c30241-07aa-48d5-93eb-41a3767879e9'),
(79, 'asdf', '4aafab15-b02c-4c38-8cfa-8b739c4e3c45'),
(80, 'adffff', 'bcbbdf74-fca3-4d8f-9f8f-3ec781eeb5e8'),
(81, 'asdf', '2fc0b0dd-2390-4e49-a8c7-4cb0dd7964ef'),
(82, 'adsffasdfasd', 'ffb83e03-32c8-4b59-a778-b87edeb6274f'),
(83, 'asdf', 'fec24cb3-2465-4ce5-b26d-a8236ef35c7a'),
(84, 'lakdsjflsjdf', 'c00adfcc-297a-4e3f-8918-3ef83007ad1c'),
(85, 'asdfaoijoh;af', 'a1e13515-c7a2-459c-91ff-78d011727788'),
(86, 'adfjkdjfkadjf', '93a980cf-e8ea-4055-8955-abeb70443961'),
(87, 'lsjdflakdjflasdfasoifoewifuwo', '64fdc34d-7fdf-4b28-8b88-7236778a9de9'),
(88, '', 'a12e7985-560c-43e9-ae37-8912a0e635c8'),
(89, 'kjdflak', '2fe32c11-e8ce-499d-94d8-f21f9885d0f2'),
(90, 'hadsf', 'be292d1a-7255-476e-a407-1147855beb56'),
(91, 'kangaroo', '3e06420a-c49f-49eb-a8db-f159e5c09aad'),
(92, 'lkjlkjsdf', '5aa0fc85-d89b-4345-a156-9200f7728077'),
(93, 'lkjlkjllkjsdlifoiewoji', 'd69813e3-e689-4569-8af6-97def9374299'),
(94, 'ljalsdkjfl', 'd6f9dcda-2ea0-4593-b1b6-1d8547b78ba7'),
(95, 'hahah', '07363190-89c1-4566-b2bf-35bca031910a'),
(96, 'jflakf', 'a973fe57-5295-4614-881d-595d8073e6d4'),
(97, 'Jesse', '808199a2-e2d4-4363-82d4-8bc66c6a3d0f'),
(98, 'Jesse', 'be3f1136-d12d-45ad-af82-308168c9250c');

-- --------------------------------------------------------

--
-- Table structure for table `planes`
--

CREATE TABLE `planes` (
  `id` int(11) NOT NULL,
  `plane` varchar(100) NOT NULL,
  `departure` varchar(20) NOT NULL,
  `arrival` varchar(10) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `seatsrow` int(11) NOT NULL,
  `rows` int(11) NOT NULL,
  `aorder` text NOT NULL,
  `seats` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `planes`
--

INSERT INTO `planes` (`id`, `plane`, `departure`, `arrival`, `origin`, `destination`, `seatsrow`, `rows`, `aorder`, `seats`) VALUES
(35, 'J123', '02:30 PM', '02:30 PM', 'Hong Kong', 'Manila', 6, 2, '0,0,1,0,0,3,0,0,0,4,0,2', '0,0,72,0,0,89,0,0,0,89,0,89'),
(36, 'J1872', '04:40 PM', '06:40 PM', 'Manila', 'Davao', 6, 2, '0,0,0,0,0,0,0,0,0,0,0,0', '0,0,0,0,0,0,0,0,0,0,0,0'),
(37, 'F10', '08:55 PM', '08:55 PM', 'Malaw', 'Denso', 10, 10, '24,0,3,15,12,0,11,19,10,30,29,0,14,17,0,0,18,23,1,9,0,0,16,21,0,0,22,15,0,0,0,0,20,26,0,0,27,28,0,0,0,0,25,0,13,0,0,0,16,0,0,0,31,0,0,0,0,0,0,0,0,0,32,0,12,7,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,4,0,0', '91,0,51,91,68,0,68,91,68,91,91,0,91,91,0,0,91,91,51,54,0,0,91,91,0,0,91,68,0,0,0,0,91,91,0,0,91,91,0,0,0,0,91,0,68,0,0,0,68,0,0,0,92,0,0,0,0,0,0,0,0,0,92,0,68,54,0,0,0,0,0,0,92,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,51,0,0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `planes`
--
ALTER TABLE `planes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `planes`
--
ALTER TABLE `planes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
