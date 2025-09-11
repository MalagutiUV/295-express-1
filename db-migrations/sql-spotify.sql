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

ALTER TABLE users CHANGE COLUMN password password_hash VARCHAR(255) NOT NULL;

INSERT INTO
    songs (title, artist)
VALUES
    ('Smells Like Teen Spirit', 'Nirvana'),
    ('Billie Jean', 'Michael Jackson'),
    ('Shape of You', 'Ed Sheeran'),
    ('Bohemian Rhapsody', 'Queen'),
    ('Rolling in the Deep', 'Adele'),
    ('Hotel California', 'Eagles'),
    ('Wonderwall', 'Oasis'),
    ('Blinding Lights', 'The Weeknd'),
    ('Lose Yourself', 'Eminem'),
    ('Hey Jude', 'The Beatles'),
    ('Like a Rolling Stone', 'Bob Dylan'),
    ('Uptown Funk', 'Mark Ronson ft. Bruno Mars'),
    ('Poker Face', 'Lady Gaga'),
    ('Hips Don’t Lie', 'Shakira'),
    ('Somebody That I Used to Know', 'Gotye'),
    ('Thunderstruck', 'AC/DC'),
    ('Enter Sandman', 'Metallica'),
    ('Halo', 'Beyoncé'),
    ('Let It Be', 'The Beatles'),
    ('Seven Nation Army', 'The White Stripes'),
    ('Mr. Brightside', 'The Killers'),
    ('Smack That', 'Akon'),
    ('Boulevard of Broken Dreams', 'Green Day'),
    ('Radioactive', 'Imagine Dragons'),
    ('Chandelier', 'Sia'),
    ('Back in Black', 'AC/DC'),
    ('Livin’ on a Prayer', 'Bon Jovi'),
    ('Skyfall', 'Adele'),
    ('Numb', 'Linkin Park'),
    ('Toxic', 'Britney Spears'),
    ('Viva La Vida', 'Coldplay'),
    ('Take On Me', 'a-ha'),
    ('Killing in the Name', 'Rage Against The Machine'),
    ('All Star', 'Smash Mouth'),
    ('Sweet Child O’ Mine', 'Guns N’ Roses'),
    ('Billie Eilish – Bad Guy', 'Billie Eilish'),
    ('Africa', 'Toto'),
    ('Highway to Hell', 'AC/DC'),
    ('Thriller', 'Michael Jackson'),
    ('Lose Control', 'Missy Elliott'),
    ('Californication', 'Red Hot Chili Peppers'),
    ('Paint It Black', 'The Rolling Stones'),
    ('Can’t Stop the Feeling', 'Justin Timberlake'),
    ('Zombie', 'The Cranberries'),
    ('No Woman, No Cry', 'Bob Marley'),
    ('In the End', 'Linkin Park'),
    ('I Will Always Love You', 'Whitney Houston'),
    ('Gangnam Style', 'PSY'),
    ('Despacito', 'Luis Fonsi ft. Daddy Yankee');