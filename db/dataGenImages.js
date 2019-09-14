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

const imgUrl = ['https://foodpics.s3-us-west-1.amazonaws.com/food0.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food1.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food2.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food3.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food4.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food5.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food6.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food7.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food8.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food9.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food10.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food11.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food12.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food13.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food14.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food15.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food16.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food17.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food18.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food19.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food20.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food21.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food22.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food23.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food24.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food25.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food26.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food27.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food28.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food29.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food30.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food31.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food32.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food33.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food34.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food35.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food36.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food37.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food38.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food39.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food40.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food41.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food42.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food43.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food44.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food45.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food46.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food47.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food48.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food49.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food50.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food51.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food52.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food53.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food54.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food55.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food56.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food57.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food58.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food59.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food60.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food61.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food62.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food63.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food64.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food65.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food66.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food67.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food68.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food69.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food70.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food71.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food72.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food73.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food74.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food75.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food76.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food77.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food78.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food79.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food80.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food81.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food82.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food83.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food84.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food85.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food86.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food87.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food88.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food89.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food80.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food91.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food92.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food93.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food94.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food95.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food96.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food97.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food98.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food99.jpg',
  'https://foodpics.s3-us-west-1.amazonaws.com/food100.jpg',
];

const getSentence = () => faker.lorem.sentences(1);
const getDate = () => faker.date.past();
const getRandomInt = (min, max) => Math.floor(Math.random() * max + min);
const getUrl = () => imgUrl[getRandomInt(0, 101)];
const getUserName = () => userTable[getRandomInt(0, 60)];
let counter = 0;

for (let i = 0; i < 10000000; i += 1) {
  for (let j = 0; j < 10; j += 1) {
    const id = counter;
    const restaurant_id = i;
    const url = getUrl();
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
