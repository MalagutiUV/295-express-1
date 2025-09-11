-- Active: 1757571179107@@mysql-express.mysql.database.azure.com@3306@express295db

CREATE USER 'expressuser'@'%' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON express295db.* TO 'expressuser'@'%';

CREATE USER 'spotifyuser'@'%' IDENTIFIED BY 'SehrSicheresPasswort!';

GRANT ALL PRIVILEGES ON spotify295.* TO 'spotifyuser'@'%';


FLUSH PRIVILEGES;

SELECT user, host FROM mysql.user WHERE user='spotifyuser';


SELECT user, host FROM mysql.user;


CREATE DATABASE express1;
CREATE USER 'expressuser1'@'%' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON express1.* TO 'expressuser1'@'%';


CREATE DATABASE express2;
CREATE USER 'expressuser2'@'%' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON express2.* TO 'expressuser2'@'%';

CREATE DATABASE express3;
CREATE USER 'expressuser3'@'%' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON express3.* TO 'expressuser3'@'%';

CREATE DATABASE express4;
CREATE USER 'expressuser4'@'%' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON express4.* TO 'expressuser4'@'%';
