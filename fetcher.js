const fs = require('fs');
const readline = require('readline');
const request = require('request');


const args = process.argv.slice(2);
const url = args[0];
const file = args[1];
// console.log(url, file);


request(url, (error, response, body) => {
  if(error){
    console.log(error);
  }else {
    // console.log(response);
    fs.writeFile(file, body, (err) => {
      if(err) return console.log(err);
      console.log(`Downloaded and saved ${fs.statSync(file).size} to ${file}`)
    });
  }
});