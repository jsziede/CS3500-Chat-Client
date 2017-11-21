-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 22, 2017 at 12:18 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `accounts`
--

-- --------------------------------------------------------

--
-- Table structure for table `avatars`
--

CREATE TABLE `avatars` (
  `name` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `avatars`
--

INSERT INTO `avatars` (`name`) VALUES
('angel'),
('comfort'),
('confused'),
('cool'),
('doggo'),
('drool'),
('ghost'),
('glaring'),
('happy'),
('inlove'),
('mad'),
('pika'),
('scared'),
('sheepish'),
('skeptical'),
('snake'),
('tired'),
('xd');

-- --------------------------------------------------------

--
-- Table structure for table `backgrounds`
--

CREATE TABLE `backgrounds` (
  `bgID` int(11) NOT NULL,
  `filename` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `backgrounds`
--

INSERT INTO `backgrounds` (`bgID`, `filename`) VALUES
(0, 'binding'),
(1, 'coral'),
(2, 'desk'),
(3, 'farm'),
(4, 'sunset'),
(5, 'flight'),
(6, 'food'),
(7, 'forest'),
(8, 'grill'),
(9, 'logs'),
(10, 'luigi'),
(11, 'motherboard'),
(12, 'mountains'),
(13, 'sky'),
(14, 'slice'),
(15, 'source'),
(16, 'space'),
(17, 'stones');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `color` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`color`) VALUES
('navy'),
('blue'),
('green'),
('teal'),
('deepskyblue'),
('dodgerblue'),
('seagreen'),
('darkslategray'),
('royalblue'),
('indigo'),
('purple'),
('slateblue'),
('chartreuse'),
('maroon'),
('red'),
('brown'),
('sienna'),
('darkgoldenrod'),
('chocolate'),
('goldenrod'),
('yellow'),
('orange'),
('gold'),
('coral'),
('hotpink'),
('white'),
('black');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `mid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8_bin NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`mid`, `uid`, `content`, `time`) VALUES
(581, 40, 'p', '2017-11-07 00:18:58'),
(582, 40, 'p', '2017-11-07 00:20:40'),
(583, 40, 'o', '2017-11-07 00:20:42'),
(584, 40, 'llll', '2017-11-07 00:20:45'),
(585, 40, 'lll llll lll', '2017-11-07 00:20:48'),
(586, 40, 'llll', '2017-11-07 00:22:04'),
(587, 40, 'lllll', '2017-11-07 00:22:07'),
(588, 40, 'aaaaaa', '2017-11-07 00:22:19'),
(589, 40, 'p', '2017-11-07 00:23:22'),
(590, 40, 'eee', '2017-11-07 00:24:00'),
(591, 40, 'eeee', '2017-11-07 00:24:03'),
(592, 40, 'ee', '2017-11-07 00:24:04'),
(593, 40, 'w', '2017-11-07 00:24:07'),
(594, 40, 's', '2017-11-07 00:24:17'),
(595, 40, 's', '2017-11-07 00:24:21'),
(596, 37, 'kjkh', '2017-11-07 17:51:44'),
(597, 37, 'asdf', '2017-11-07 17:51:47'),
(598, 37, 'hl', '2017-11-07 18:41:10'),
(599, 41, 'new', '2017-11-07 18:44:51'),
(600, 40, 'mesage', '2017-11-07 23:08:22'),
(601, 40, 'test', '2017-11-07 23:10:40'),
(602, 40, 'test2', '2017-11-07 23:11:02'),
(603, 40, '3', '2017-11-07 23:12:01'),
(604, 40, '4', '2017-11-07 23:15:31'),
(605, 40, '5', '2017-11-07 23:15:42'),
(606, 40, '6', '2017-11-07 23:15:50'),
(607, 42, 'hello', '2017-11-07 23:16:49'),
(608, 42, '&#x1f914;', '2017-11-07 23:28:19'),
(609, 42, 'testing emojis &#x1f914;&#x1f914;&#x1f914;', '2017-11-07 23:44:25'),
(610, 42, '&#x1f914; ðŸŒ', '2017-11-07 23:53:30'),
(611, 42, 'ðŸ‘€ðŸ‘€ðŸ‘€ðŸŽ©ðŸŽ©ðŸŽ©ðŸ§ðŸ§ðŸ§ðŸŸðŸŸðŸŸ', '2017-11-07 23:55:02'),
(612, 43, 'message', '2017-11-08 00:01:07'),
(613, 43, 'âš™', '2017-11-08 00:01:39'),
(614, 43, 'ðŸ§ðŸ§ðŸ§ðŸ§ðŸ§ðŸ§ðŸ§', '2017-11-08 00:01:53'),
(619, 40, 'test', '2017-11-08 15:43:41'),
(620, 40, 'test', '2017-11-08 15:43:46'),
(623, 0, '', '2017-11-08 12:56:27'),
(624, 0, '', '2017-11-08 12:56:43'),
(625, 0, '', '2017-11-08 12:57:02'),
(626, 0, '', '2017-11-08 12:57:21'),
(627, 0, '', '2017-11-08 12:57:25'),
(628, 0, '', '2017-11-08 13:07:43'),
(629, 0, '', '2017-11-08 13:13:43'),
(630, 0, '', '2017-11-08 13:14:52'),
(631, 0, '', '2017-11-08 13:15:03'),
(632, 0, '', '2017-11-08 13:15:10'),
(633, 0, '', '2017-11-08 13:15:18'),
(634, 0, '', '2017-11-08 13:15:56'),
(635, 0, '', '2017-11-08 13:16:03'),
(636, 0, '', '2017-11-08 13:16:09'),
(637, 0, '', '2017-11-08 13:27:13'),
(638, 0, '', '2017-11-08 13:27:13'),
(639, 40, 'ðŸ‘€', '2017-11-09 18:37:00'),
(640, 40, 'ðŸ‘€ðŸ‘€ðŸ‘€', '2017-11-09 18:38:15'),
(641, 40, 'test', '2017-11-15 14:22:26'),
(642, 40, 'test2', '2017-11-15 14:22:36'),
(643, 40, 'test3', '2017-11-15 14:22:46'),
(644, 45, 'hello world', '2017-11-17 01:56:35'),
(645, 45, 'test', '2017-11-17 02:16:06'),
(646, 45, 'test3', '2017-11-17 02:22:49'),
(647, 45, 'test4', '2017-11-17 02:23:02'),
(648, 45, 'test5', '2017-11-17 02:23:43'),
(649, 37, 'Hi', '2017-11-17 02:24:42'),
(650, 45, 'hello', '2017-11-17 02:25:51'),
(651, 45, 'test', '2017-11-17 02:28:53'),
(652, 45, 'test3', '2017-11-17 02:29:09'),
(653, 37, 'Test', '2017-11-17 02:31:35'),
(654, 37, 'Test2', '2017-11-17 02:40:46'),
(655, 45, 'test', '2017-11-17 02:42:00'),
(656, 45, 'testttt', '2017-11-17 02:42:16'),
(657, 45, 'test', '2017-11-17 02:42:43'),
(658, 45, 'gfadsg', '2017-11-17 02:44:08'),
(659, 45, 'test', '2017-11-17 02:47:18'),
(660, 45, 'test', '2017-11-17 03:01:28'),
(661, 45, 'test 3', '2017-11-17 03:01:48'),
(662, 45, 'qqqqq', '2017-11-17 03:01:59'),
(663, 45, 'wwwww', '2017-11-17 03:02:02'),
(664, 45, 'hello', '2017-11-17 03:16:49'),
(665, 45, 'test', '2017-11-17 03:17:12'),
(666, 45, 'test2', '2017-11-17 03:17:43'),
(667, 37, 'Hello', '2017-11-17 03:21:10'),
(668, 37, 'Hello again', '2017-11-17 03:21:24'),
(669, 37, 'Hello a third time', '2017-11-17 03:22:17'),
(670, 45, 'test', '2017-11-16 21:32:47'),
(671, 40, 'hgg', '2017-11-16 21:34:22'),
(672, 40, 'fsdhdh', '2017-11-16 21:35:28'),
(673, 34, 'hi', '2017-11-19 23:50:34'),
(674, 34, 'klklklkl', '2017-11-19 23:50:43'),
(675, 34, 'test load time', '2017-11-20 01:39:53'),
(676, 34, 'ðŸ‘ˆ ðŸŠðŸ¿ ðŸ’†ðŸ½', '2017-11-20 01:54:56'),
(677, 34, 'ðŸ‡¬ðŸ‡± ðŸ‡ªðŸ‡­ âš— ðŸ›ƒ ðŸ¤™ ðŸ¤™ðŸ» ðŸ¤™ðŸ¼', '2017-11-20 01:55:11'),
(678, 34, 'emojis are working?ðŸ©', '2017-11-20 02:03:51'),
(679, 34, 'ðŸ¤¼ ðŸ¤¼ ðŸ½ ðŸ¼', '2017-11-20 02:04:20'),
(680, 34, 'ðŸ–  ðŸ·', '2017-11-20 02:07:22'),
(681, 34, 'ðŸ¤¶ðŸ¿ â›· ðŸ‡ ðŸ¤º ðŸ‘¥ ðŸ––ðŸ¼ ðŸ¤›ðŸ¿ ðŸ¦ ðŸ‘˜ ðŸ’ â„ â˜ƒ â›„ â˜„ ðŸ”¥ ðŸ’§ ðŸŒŠ', '2017-11-20 02:31:21'),
(682, 34, 'ðŸ¤” ðŸ¤” ðŸ¤” ðŸ¤”', '2017-11-20 02:31:31'),
(683, 34, 'ðŸ™€', '2017-11-21 15:50:57'),
(684, 40, 'test', '2017-11-21 11:38:25'),
(685, 34, 'test', '2017-11-21 11:41:23'),
(686, 46, 'hello world', '2017-11-21 22:36:59'),
(687, 46, 'ðŸ³', '2017-11-21 22:37:46'),
(688, 46, 'helo', '2017-11-21 16:38:47'),
(690, 46, 'test', '2017-11-21 16:47:01'),
(691, 46, 'testing', '2017-11-21 16:47:15'),
(692, 46, 'ðŸ ðŸ ðŸ ðŸ ðŸ‘ ðŸ‘ ðŸ‘ ðŸ‘', '2017-11-21 23:28:14'),
(693, 46, 'ðŸ†', '2017-11-21 23:35:55'),
(694, 46, 'did that send', '2017-11-21 23:36:52'),
(695, 46, 'v', '2017-11-21 23:37:00'),
(696, 46, '', '2017-11-21 23:37:07'),
(697, 47, 'ssssss', '2017-11-21 23:49:06'),
(698, 48, 'baa ðŸ', '2017-11-22 00:13:47');

-- --------------------------------------------------------

--
-- Table structure for table `prefs`
--

CREATE TABLE `prefs` (
  `uid` int(11) NOT NULL,
  `avatar` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT 'happy',
  `bg` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'coral',
  `theme` varchar(30) COLLATE utf8_bin NOT NULL DEFAULT 'light',
  `color` varchar(30) COLLATE utf8_bin NOT NULL DEFAULT 'black'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `prefs`
--

INSERT INTO `prefs` (`uid`, `avatar`, `bg`, `theme`, `color`) VALUES
(34, 'drool', 'source', 'dark', 'chocolate'),
(35, 'confused', 'coral', 'light', 'green'),
(36, 'glaring', 'coral', 'light', 'orange'),
(37, 'xd', 'coral', 'dark', 'maroon'),
(38, 'snake', 'coral', 'light', 'purple'),
(39, 'sheepish', 'coral', 'light', 'red'),
(40, 'doggo', 'coral', 'dark', 'gold'),
(41, 'doggo', 'coral', 'light', 'yellow'),
(42, 'pika', 'coral', 'light', 'green'),
(43, 'cool', 'coral', 'light', 'blue'),
(44, 'confused', 'coral', 'light', 'green'),
(45, 'ghost', 'coral', 'dark', 'white'),
(46, 'sheepish', 'logs', 'dark', 'seagreen'),
(47, 'snake', 'coral', 'dark', 'chartreuse'),
(48, 'sheepish', 'farm', 'dark', 'black');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `id`, `password`) VALUES
('josh', 34, 'f94adcc3ddda04a8f34928d862f404b4'),
('test', 35, '098f6bcd4621d373cade4e832627b4f6'),
('user', 36, 'ee11cbb19052e40b07aac0ca060c23ee'),
('xcx', 37, '4ffc8a0cd651e1ce774c3e8fa7441b76'),
('Fernando', 38, 'e807f1fcf82d132f9bb018ca6738a19f'),
('root', 39, '63a9f0ea7bb98050796b649e85481845'),
('blob', 40, 'ee26908bf9629eeb4b37dac350f4754a'),
('new', 41, '22af645d1859cb5ca6da0c484f1f37ea'),
('newaccount', 42, '4288a009bb6e9c4560c9e1a467ffb656'),
('penguin', 43, '24f7ca5f6ff1a5afb9032aa5e533ad95'),
('ferr', 44, 'e807f1fcf82d132f9bb018ca6738a19f'),
('dfg', 45, '38d7355701b6f3760ee49852904319c1'),
('new user', 46, '0354d89c28ec399c00d3cb2d094cf093'),
('snake', 47, 'de1b2a7baf7850243db71c4abd4e5a39'),
('sheep', 48, '23ec24c5ca59000543cee1dfded0cbea');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `backgrounds`
--
ALTER TABLE `backgrounds`
  ADD UNIQUE KEY `bgID` (`bgID`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `prefs`
--
ALTER TABLE `prefs`
  ADD UNIQUE KEY `uid` (`uid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=699;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
