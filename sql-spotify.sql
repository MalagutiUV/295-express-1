CREATE DATABASE spotify295;

USE spotify295;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
    );

CREATE TABLE
    songs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        artist VARCHAR(255) NOT NULL
    );

INSERT INTO
    songs (title, artist)
VALUES
    ('Bohemian Rhapsody', 'Queen'),
    ('Billie Jean', 'Michael Jackson'),
    ('Smells Like Teen Spirit', 'Nirvana'),
    ('Shape of You', 'Ed Sheeran'),
    ('Hotel California', 'Eagles');

INSERT INTO
    users (username, password, email)
VALUES
    ('alice', 'password123', 'alice@example.com'),
    ('bob', 'hunter2', 'bob@example.com'),
    ('charlie', 'qwerty!', 'charlie@example.com'),
    ('diana', 'letmein', 'diana@example.com'),
    ('eve', 'secret', 'eve@example.com');

ALTER TABLE users ADD UNIQUE (email);