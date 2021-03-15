
const fs = require('fs');
//const Board = require('./methods/board.js');

const data = JSON.parse(fs.readFileSync(path,'utf-8'));

console.log("Update "+data.totalchecks + ":");
for (let worker of data.workers) {
    console.log("	- "+worker.name +": "+worker.percent);
}
