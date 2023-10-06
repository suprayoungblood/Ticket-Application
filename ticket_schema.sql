-- Select (use) the 'ticket_system' database
USE ticket_system;

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

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tickets Table
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
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
