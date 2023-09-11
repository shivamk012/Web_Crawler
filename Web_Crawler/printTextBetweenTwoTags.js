const fs = require('fs');

function printTextBetweenTwoTags(pageSource , startIndex , endIndex){
    let row = '';
    for(let i=startIndex ; i <= endIndex ; ++i){
        row += pageSource[i];
    }
    try {
        fs.appendFileSync('file.txt', row);
      } catch (err) {
        console.error('Error:', err);
      }
}

module.exports = {printTextBetweenTwoTags};