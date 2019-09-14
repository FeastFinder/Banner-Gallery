/* eslint-disable no-console */
/* eslint-disable camelcase */
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');

const writer = csvWriter();
writer.pipe(fs.createWriteStream('imgTable.csv'));

const userTable = ['Robert',
  'Stannis',
  'Gendry',
  'Renly',
  'Brienne',
  'Melisandre',
  'Cersei',
  'Jaimie',
  'Tywin',
  'Tyrion',
  'Varys',
  'Tommen',
  'Bronn',
  'Petyr',
  'Joffrey',
  'Margaery',
  'Sandor',
  'Gregor',
  'Aegon',
  'Daenerys',
  'Drogo',
  'Arya',
  'Bran',
  'Jon',
  'Ned',
  'Sansa',
  'Robb',
  'Catelyn',
  'Asha',
  'Theon',
  'Ramsay',
  'Benjen',
  'Samwell',
  'Tormund',
  'Davos',
  'Eddard',
  'Ellaria',
  'Balon',
  'Jaqen',
  'Lyanna',
  'Jorah',
  'Nymeria',
  'Oberyn',
  'Osha',
  'Rhaegal',
  'Rickard',
  'Ghost',
  'Lady',
  'Edmure',
  'Walder',
  'Hodor',
  'Greywind',
  'Missandei',
  'Rickon',
  'Jeyne',
  'Roose',
  'Viserys',
  'Podrick',
  'Beric',
  'Ygritte',
];

const getSentence = () => faker.lorem.sentences(1);
const getDate = () => faker.date.past();
const getRandomInt = (min, max) => Math.floor(Math.random() * max + min);
const getUserName = () => userTable[getRandomInt(0, 60)];
let counter = 0;

for (let i = 0; i < 10000000; i += 1) {
  for (let j = 0; j < 10; j += 1) {
    const id = counter;
    const restaurant_id = i;
    const url = `https://foodpics.s3-us-west-1.amazonaws.com/food${getRandomInt(0, 101)}.jpg`;
    const description = getSentence();
    const user_name = getUserName();
    const date = getDate();
    const unrelated_flag = getRandomInt(0, 3);
    const inappropriate_flag = getRandomInt(0, 3);
    const dislike_flag = getRandomInt(0, 3);
    counter += 1;

    writer.write({
      id,
      restaurant_id,
      url,
      description,
      user_name,
      date,
      unrelated_flag,
      inappropriate_flag,
      dislike_flag,
    });
  }

  if (i % 100000 === 0) {
    console.log(i);
  }
}

writer.end();
