const decompress = require('decompress');
const decompressTargz = require('decompress-targz');

console.log(process.argv[2]);
console.log(process.argv[3]);

if (!process.argv[2] || !process.argv[3]) {
  console.log('Usage: npm run start [filename] [folder]');
  
}

const decompressArchive = function (filename, targetFolder) {
  console.log(`Attempting to decompress ${targetFolder}/${filename}`);
  
  return new Promise((resolve, reject) => {
      try {
          decompress(targetFolder + '/' + filename, targetFolder + '/decomp', {
              plugins: [
                  decompressTargz()
              ]
          }).then(() => {
              resolve(true);
          });
      } catch (err) {
          console.log('Something has gone wrong:', err);
          reject(err)
      }
  })
}

decompressArchive(process.argv[2], process.argv[3]).then(() => {
  console.log('It worked!!');
});