CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username varchar(250) NOT NULL UNIQUE,
    password varchar(250) NOT NULL,
    age int NOT NULL, 
    location varchar(250) NOT NULL,
    proglang varchar(250) NOT NULL,
    comment varchar(250),
    matches int,
    url varchar(250)
);

INSERT INTO users (username, password, age, location, proglang, comment)
VALUES('BOB', '12321', 30, 'oklahoma city', 'Assembly', 'Im fancy') RETURNING *

INSERT INTO users (username, password, age, location, proglang, comment)
VALUES('Stephen', '123', 31, 'oklahoma city', 'PHP', 'PHARAH') RETURNING *



++++++++++++++++++++++
DROP TABLE users
++++++++++++++++++++++

SELECT * FROM users WHERE username = 'BOB'

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    chat_id int NOT NULL, 
    owner_id int NOT NULL, 
	to_id int NOT NULL,
    message varchar(250),
    time_stamp timestamp
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username varchar(25) NOT NULL UNIQUE,
    password varchar(25) NOT NULL,
    age int NOT NULL, 
    location varchar(25) NOT NULL,
    proglang varchar(25) NOT NULL,
    comment varchar(25),
    matches int NOT NUll,
    url varchar(75)
);

CREATE TABLE matches (
    match_id SERIAL PRIMARY KEY,
    user_1 int NOT NULL,
    user_2 int NOT NULL
);

CREATE TABLE participants (
    participant_id SERIAL PRIMARY KEY,
    user_id int NOT NULL,
    chat_id int NOT NULL
);

CREATE TABLE chats (
    chat_id SERIAL PRIMARY KEY,
    chat bool
);


INSERT INTO chats (chat)
VALUES (true);

INSERT INTO participants (user_id, chat_room_id)
VALUES (2, 1);

INSERT INTO participants (user_id, chat_room_id)
VALUES (2, 2);

SELECT * FROM chats
SELECT * FROM users
SELECT * FROM participants

SELECT c.*, p.* FROM chats c
INNER JOIN participants p ON chat_room_id = c.chat_id;


SELECT p.* FROM participants p
INNER JOIN participants i ON p.participant_id = i.participant_id 
WHERE p.user_id = 1
AND i.user_id = 2;

SELECT chat_room_id FROM (SELECT * FROM participants p WHERE p.user_id = 2)  as table_1 WHERE user_id = 1; 

SELECT 

SELECT chat_room_id CASE 

SELECT chat_room_id
CASE user_id
WHEN user_id THEN 
WHEN user_id = 2 
END
FROM participants;


CASE WHEN COLUMN1 = COLUMN2 THEN '1' ELSE '0' END AS MyDesiredResult


SELECT * FROM participants 

SELECT DISTINCT chat_room_id FROM participants WHERE user_id = 2

SELECT DISTINCT 

===========================
DROP TABLE CHATS
DROP TABLE messages
DROP TABLE users
DROP TABLE participants