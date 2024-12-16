-- Script para el Servicio SOAP

-- Base de datos para el Servicio SOAP (Disponibilidad de Habitaciones)
CREATE DATABASE IF NOT EXISTS soap_service;

USE soap_service;

CREATE TABLE IF NOT EXISTS availability (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_type VARCHAR(50) NOT NULL,
    available_date DATE NOT NULL,
    status ENUM('available', 'occupied', 'maintenance') DEFAULT 'available'
);

-- Datos de prueba iniciales
INSERT INTO availability (room_type, available_date, status) VALUES
('Deluxe', '2024-12-20', 'available'),
('Deluxe', '2024-12-21', 'available'),
('Suite', '2024-12-20', 'maintenance');


-- Script para la API REST

-- Base de datos para la API REST (Gestión de Reservas)
CREATE DATABASE IF NOT EXISTS rest_service;

USE rest_service;

CREATE TABLE IF NOT EXISTS reservations (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    room_number INT NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('active', 'canceled') DEFAULT 'active'
);

-- Datos de prueba iniciales
INSERT INTO reservations (room_number, customer_name, start_date, end_date, status) VALUES
(101, 'John Doe', '2024-12-20', '2024-12-25', 'active'),
(102, 'Jane Smith', '2024-12-22', '2024-12-27', 'active');


-- Script para el Microservicio de Inventario

-- Base de datos para el Microservicio de Inventario
CREATE DATABASE IF NOT EXISTS inventory_service;

USE inventory_service;

CREATE TABLE IF NOT EXISTS rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_number INT NOT NULL UNIQUE,
    room_type VARCHAR(50) NOT NULL,
    status ENUM('available', 'maintenance', 'occupied') DEFAULT 'available'
);

-- Datos de prueba iniciales
INSERT INTO rooms (room_number, room_type, status) VALUES
(101, 'Deluxe', 'available'),
(102, 'Suite', 'maintenance'),
(103, 'Standard', 'occupied');
