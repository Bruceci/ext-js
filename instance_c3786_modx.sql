-- phpMyAdmin SQL Dump
-- version 4.2.7
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Фев 03 2015 г., 12:06
-- Версия сервера: 5.6.21-70.0
-- Версия PHP: 5.4.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `instance_c3786_modx`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cities`
--

CREATE TABLE IF NOT EXISTS `cities` (
  `userID` int(3) NOT NULL,
  `city` varchar(255) NOT NULL,
  `active` enum('true','false') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cities`
--

INSERT INTO `cities` (`userID`, `city`, `active`) VALUES
(30, 'Минск', ''),
(31, 'Гомель', 'true'),
(32, 'Лида', 'true'),
(33, 'Липки', 'true'),
(34, 'Минск', 'true'),
(35, 'Брест', 'true'),
(36, 'Солигорск', 'true'),
(37, 'Пинск', 'true'),
(38, 'Слуцк', 'true'),
(39, 'Витебск', 'true');

-- --------------------------------------------------------

--
-- Структура таблицы `mytree`
--

CREATE TABLE IF NOT EXISTS `mytree` (
`id` int(11) NOT NULL COMMENT 'node_id',
  `text` varchar(20) NOT NULL COMMENT 'node_name',
  `parent_id` int(11) NOT NULL,
  `leaf` enum('true','false') NOT NULL COMMENT 'true/false'
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=95 ;

--
-- Дамп данных таблицы `mytree`
--

INSERT INTO `mytree` (`id`, `text`, `parent_id`, `leaf`) VALUES
(1, 'ФИО людей', 0, 'false'),
(2, 'Образование', 1, 'true'),
(3, 'Город', 1, 'true');

-- --------------------------------------------------------

--
-- Структура таблицы `obrazovanie`
--

CREATE TABLE IF NOT EXISTS `obrazovanie` (
  `userID` int(4) NOT NULL,
  `obrazov` varchar(255) NOT NULL,
  `active` enum('true','false') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `obrazovanie`
--

INSERT INTO `obrazovanie` (`userID`, `obrazov`, `active`) VALUES
(34, 'Высшее', 'true'),
(33, 'Липовое', 'true'),
(32, 'Доктор наук', 'true'),
(31, 'Среднее', 'true'),
(30, 'Высшее (незаконченное или неоконченное) ', 'true'),
(35, 'Магистр экономических наук', ''),
(36, 'Среднее', 'true'),
(37, 'Доктор педагогических наук', 'true'),
(38, '4 класса', 'true'),
(39, 'Высшее', 'true');

-- --------------------------------------------------------

--
-- Структура таблицы `Users2`
--

CREATE TABLE IF NOT EXISTS `Users2` (
`userID` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `patronymic` varchar(255) NOT NULL,
  `active` enum('true','false') NOT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=43 ;

--
-- Дамп данных таблицы `Users2`
--

INSERT INTO `Users2` (`userID`, `name`, `lastname`, `patronymic`, `active`) VALUES
(39, 'Лидия', 'Сорокина', 'Андреевна', 'true'),
(37, 'Мария', 'Гришина', 'Ивановна', 'true'),
(36, 'Лидия', 'Бабушкина ', 'Петровна', ''),
(35, 'Николай', 'Кислый', 'Григорьевич', ''),
(34, 'Артем', 'Буркун', 'Андреевич', 'true'),
(33, 'Святослав', 'Василенко', 'Генадьевич', 'true'),
(32, 'Федор', 'Козлов', 'Борисович ', 'true'),
(31, 'Петр', 'Сидоров', 'Васильевич', 'true'),
(30, 'Людвиг', 'Ивашко', 'Аристархович', 'true'),
(38, 'Светлана', 'Лютикова', 'Николаевна', 'true');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
 ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `mytree`
--
ALTER TABLE `mytree`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `obrazovanie`
--
ALTER TABLE `obrazovanie`
 ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `Users2`
--
ALTER TABLE `Users2`
 ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mytree`
--
ALTER TABLE `mytree`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'node_id',AUTO_INCREMENT=95;
--
-- AUTO_INCREMENT for table `Users2`
--
ALTER TABLE `Users2`
MODIFY `userID` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
