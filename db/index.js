/* eslint-disable camelcase */
/* eslint-disable no-console */
// const mysql = require('mysql');
const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

pool.connect();

const getImagesFromListing = (listingId, cb) => {
  // const id = Number(listingId.slice(1));
  const id = listingId;

  pool.query(`SELECT * FROM images WHERE restaurant_id = ${id}`, (error, results) => {
    if (error) { console.log(error); }
    cb(null, results);
  });
};

const addImageToListing = (req, res, cb) => {
  const { listing } = req.params;
  const {
    url, description, user_name, date,
  } = req.body;
  const query = {
    text: 'INSERT INTO images (restaurant_id, url, description, user_name, date) VALUES ($1, $2, $3, $4, $5)',
    values: [listing, url, description, user_name, date],
  };
  pool.query(query, (error, success) => {
    if (error) { cb(error, null); }
    cb(null, success);
  });
};

const deleteImageFromListing = (req, res, cb) => {
  const { id } = req.body;

  pool.query(`DELETE FROM images WHERE id = ${id}`, (error, success) => {
    if (error) { cb(error, null); }
    cb(null, success);
  });
};

const editImageInListing = (req, res, cb) => {
  const set = [];
  let counter = 0;

  Object.keys(req.body).forEach((key) => {
    set.push(`${key} = ($${counter += 1})`);
  });

  set.shift();

  const query = {
    text: `UPDATE images SET ${set} WHERE id = ($1)`,
    values: Object.values(req.body),
  };

  console.log(set);

  pool.query(query, (error, success) => {
    if (error) { cb(error, null); }
    cb(null, success);
  });
};

module.exports = {
  getImagesFromListing, addImageToListing, deleteImageFromListing, editImageInListing,
};
