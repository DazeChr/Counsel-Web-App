-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2025 at 07:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `counsel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(45) NOT NULL,
  `apellido_usuario` varchar(45) NOT NULL,
  `correo_usuario` varchar(45) NOT NULL,
  `telefono_usuario` varchar(45) NOT NULL,
  `cel_familiar_usuario` varchar(45) NOT NULL,
  `direccion_usuario` varchar(60) NOT NULL,
  `clave_usuario` varchar(45) NOT NULL,
  `conducta_usuario` varchar(45) NOT NULL,
  `anotaciones_generales_usuario` text NOT NULL,
  `status_usuario` varchar(45) NOT NULL DEFAULT 'Activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `apellido_usuario`, `correo_usuario`, `telefono_usuario`, `cel_familiar_usuario`, `direccion_usuario`, `clave_usuario`, `conducta_usuario`, `anotaciones_generales_usuario`, `status_usuario`) VALUES
(1, 'Juan Pablo', 'Pérez', 'juan@example.com', '123456789', '987654321', 'Calle Principal 123', 'clave123', 'Evita contacto visual', 'Presenta ansiedad en reuniones sociales.', 'Activo'),
(2, 'María', 'González', 'maria@example.com', '987654321', '123456789', 'Avenida Central 456', 'maria456', 'Morder uñas', 'Refiere altos niveles de estrés en el trabajo.', 'Activo'),
(3, 'Carlos', 'Martínez', 'carlos@example.com', '555123456', '555987654', 'Calle Secundaria 789', 'clave789', 'Interrumpir conversaciones', 'Dificultades para respetar turnos al hablar.', 'Activo'),
(4, 'Ana', 'López', 'ana@example.com', '777987654', '777123456', 'Boulevard Principal 234', 'anaclave', 'Jugar con el cabello', 'Expresa inseguridad al hablar en público.', 'Activo'),
(5, 'Pedro', 'Ramírez', 'pedro@example.com', '999888777', '999777888', 'Avenida Principal 567', 'pedro123', 'Hablar en voz baja', 'Muestra dificultades para expresar emociones.', 'Activo'),
(6, 'Gil', 'Martinez', 'falix15255@sectorid.com', '1234567890', '0987654321', 'Dunas', '8888', 'Estudiar', 'asda', 'Activo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
