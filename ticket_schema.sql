-- Create a new database named 'ticket_system'
CREATE DATABASE ticket_system;

-- Select (use) the 'ticket_system' database
USE ticket_system;

-- Now, create your tables:

-- Categories Table
CREATE TABLE categories (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL
);

-- Types Table
CREATE TABLE types (
id INT AUTO_INCREMENT PRIMARY KEY,
category_id INT,
name VARCHAR(255) NOT NULL,
FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Tickets Table
CREATE TABLE tickets (
id INT AUTO_INCREMENT PRIMARY KEY,
subject VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Ticket Types (Many-to-Many relationship)
CREATE TABLE ticket_types (
ticket_id INT,
type_id INT,
FOREIGN KEY (ticket_id) REFERENCES tickets(id),
FOREIGN KEY (type_id) REFERENCES types(id),
PRIMARY KEY (ticket_id, type_id)
);

-- Ticket Files Table
CREATE TABLE ticket_files (
id INT AUTO_INCREMENT PRIMARY KEY,
ticket_id INT,
filename VARCHAR(255) NOT NULL,
FOREIGN KEY (ticket_id) REFERENCES tickets(id)
);
