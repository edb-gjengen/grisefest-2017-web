const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const handleApi = function(req, res, next) { // eslint-disable-line
  console.log('api route handler');

  const route = req.params.page || 'index';
  const filename = path.join(__dirname, '..', 'api', 'routes', `${route}.json`);
  const filenameWithIndexAppended = path.join(filename, 'index.json');
  console.log('filename', filename);

  const readFile = filename => new Promise((resolve, reject) => {
    fs.readFile(
      filename,
      'utf8',
      (err, data) => {
        console.log(': fs.readfile callback started');
        if (err) {
          console.log(err);
          return reject(new Error('could not read json file'));
        }

        return resolve(JSON.parse(data));
      }
    );
  });

  return readFile(filename)
  // .catch(() => readFile(filenameWithIndexAppended))
  .then((data) => {
    console.log('typeof data', typeof data);
    return res.json(data);
  })
  .catch((err) => {
    console.log('this did not work');
    return res.json(err);
  });
};

const apiHandler = express();
apiHandler.use(cors());
apiHandler.get('/routes/(:page)?', handleApi);

module.exports = apiHandler;
