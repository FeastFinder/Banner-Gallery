DROP DATABASE IF EXISTS banner_images;

CREATE DATABASE banner_images;

\c banner_images;

CREATE TABLE users (
  id int PRIMARY KEY,
  user_name varchar(15),
  avatar_url varchar(500)
);

CREATE TABLE restaurants (
  restaurant_id int PRIMARY KEY,
  restaurant_name varchar(50)
);

CREATE TABLE images (
  id PRIMARY KEY,
  restaurant_id int REFERENCES restaurants(restaurant_id),
  url varchar(500) NOT NULL,
  description varchar(255),
  user_name varchar(15) REFERENCES users(user_name),
  date date,
  unrelated_flag smallint,
  inappropriate_flag smallint,
  dislike_flag smallint
);
