CREATE DATABASE spotify295;

USE spotify295;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
    );

INSERT INTO
    users (username, password, email)
VALUES
    ('alice', 'password123', 'alice@example.com'),
    ('bob', 'hunter2', 'bob@example.com'),
    ('charlie', 'qwerty!', 'charlie@example.com'),
    ('diana', 'letmein', 'diana@example.com'),
    ('eve', 'secret', 'eve@example.com');