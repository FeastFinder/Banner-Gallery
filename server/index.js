/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/index.js');

const app = express();
const port = 3001;

app.use(compression());
app.use(express.static('public'));
app.use('/:listing/photos', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/:listing/photos', (req, res) => {
  db.getImagesFromListing(req.params.listing, (error, images) => {
    if (error) { return error; }
    res.send(images);
    return undefined;
  });
});

app.post('/api/post/:listing/photos', (req, res) => {
  db.addImageToListing(req, res, (error, success) => {
    if (error) { res.send(error); }
    res.status(201);
    res.end();
  });
});

app.delete('/api/delete/:listing/photos', (req, res) => {
  db.deleteImageFromListing(req, res, (error, success) => {
    if (error) { res.send(error); }
    res.status(201);
    res.end();
  });
});

app.put('/api/update/:listing/photos', (req, res) => {
  db.editImageInListing(req, res, (error, success) => {
    if (error) { res.send(error); }
    res.status(201);
    res.end();
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
