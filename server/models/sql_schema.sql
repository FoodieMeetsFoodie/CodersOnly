CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username varchar(25) NOT NULL UNIQUE,
	password varchar(25) NOT NULL,
	first_name varchar(25), 
	last_name varchar(25),
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
	match_id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	chat_room_id int NOT NULL
);

CREATE TABLE chats (
	chat_id SERIAL PRIMARY KEY
);

CREATE TABLE messages (
	message_id SERIAL PRIMARY KEY,
	chat_id int NOT NULL, 
	owner_id int NOT NULL, 
	message varchar(250),
	time_stamp timestamp
);