/* eslint-disable no-console */
/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');

const writeImg = fs.createWriteStream('imgTable.csv');
writeImg.write('restaurant_id,url,description,user_name,date,unrelated_flag,inappropriate_flag,dislike_flag\n', 'utf8');

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
// let counter = 0;


function writeManyRecords(writer, encoding, callback) {
  let i = 10000001;
  function write() {
    let ok = true;
    do {
      i -= 1;
      // counter += 1;
      const data = `${i},${`https://foodpics.s3-us-west-1.amazonaws.com/food${getRandomInt(0, 101)}.png`},${getSentence()},${getUserName()},${getDate()},${getRandomInt(0, 3)},${getRandomInt(0, 3)},${getRandomInt(0, 3)}\n`;
      if (i === 1) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 1 && ok);
    if (i > 1) {
      writer.once('drain', write);
    }
  }
  write();
}

writeManyRecords(writeImg, 'utf-8', () => {
  writeManyRecords(writeImg, 'utf-8', () => {
    writeManyRecords(writeImg, 'utf-8', () => {
      writeManyRecords(writeImg, 'utf-8', () => {
        writeManyRecords(writeImg, 'utf-8', () => {
          writeManyRecords(writeImg, 'utf-8', () => {
            writeManyRecords(writeImg, 'utf-8', () => {
              writeManyRecords(writeImg, 'utf-8', () => {
                writeManyRecords(writeImg, 'utf-8', () => {
                  writeManyRecords(writeImg, 'utf-8', () => {
                    writeImg.end();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
