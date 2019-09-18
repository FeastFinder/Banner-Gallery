/* eslint-disable camelcase */
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');

const writer = csvWriter();
writer.pipe(fs.createWriteStream('restTable.csv'));

const getName = () => faker.lorem.words(2);

for (let i = 0; i < 10000000; i += 1) {
  // const restaurant_id = i;
  const restaurant_name = getName();

  writer.write({
    // restaurant_id,
    restaurant_name,
  });
}

writer.end();
