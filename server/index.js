/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();
const port = 3001;

app.use(compression());
app.use(express.static('public'));
app.use('/:listing', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/:listing', (req, res) => {
  db.getImagesFromListing(req.params.listing, (error, images) => {
    if (error) { return error; }
    res.send(images);
    return undefined;
  });
});

app.post('/api/post/:listing', (req, res) => {
  db.addImageToListing(req, res, (error, success) => {
    if (error) { res.send(error); }
    res.status(201);
    res.end();
  });
});

app.delete('/api/delete/:listing', (req, res) => {
  db.deleteImageFromListing(req, res, (error, success) => {
    if (error) { res.send(error); }
    res.status(201);
    res.end();
  });
});

app.put('/api/update/:listing', (req, res) => {
  db.editImageInListing(req, res, (error, success) => {
    if (error) { res.send(error); }
    res.status(201);
    res.end();
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
