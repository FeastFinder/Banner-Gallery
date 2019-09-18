CREATE KEYSPACE banner_images WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE banner_images;

CREATE TABLE users (
  id int PRIMARY KEY,
  user_name varchar,
  avatar_url varchar
);

CREATE TABLE restaurants (
  restaurant_id int PRIMARY KEY,
  restaurant_name varchar
);

CREATE TABLE images (
  id int,
  restaurant_id int,
  url varchar,
  description varchar,
  user_name varchar,
  date varchar,
  unrelated_flag smallint,
  inappropriate_flag smallint,
  dislike_flag smallint,
  PRIMARY KEY (restaurant_id, id)
);
