DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS cards CASCADE;
DROP TABLE IF EXISTS boards_cards CASCADE;
CREATE TABLE users(
  user_id serial PRIMARY KEY,
  username varchar(160) UNIQUE,
  password varchar(160)
);

CREATE TABLE boards (
  board_id serial PRIMARY KEY,
  description varchar(50),
  user_id int REFERENCES users(user_id)
);

CREATE TABLE cards (
  card_id bigserial PRIMARY KEY,
  description varchar(250),
  image_url varchar(250)
);

CREATE TABLE boards_cards (
  card_id int REFERENCES cards (card_id) ON UPDATE CASCADE,
  board_id int REFERENCES boards (board_id) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT board_card_pk PRIMARY KEY (board_id, card_id) --composite id optimizes query when done using board_id
);
