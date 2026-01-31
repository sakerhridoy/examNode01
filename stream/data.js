const fs = require('fs');

const readStream = fs.createReadStream('data.txt');

readStream.on('data', chunk => {
  console.log(chunk.toString());
});
readStream.on('end', () => {
  console.log('No data');
});