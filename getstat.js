
const fs = require('fs');
const Ethermine = require('ethermine-api');
const ethermine = new Ethermine();

ethermine.getMinerPayouts(miner, function(err, pay) {
    let path = './data/stat_payout_'+pay.data.length+'.json';
    const data = JSON.parse(fs.readFileSync(path,'utf-8'));

    console.log("Update "+data.totalchecks + ":");
    for (let worker of data.workers) {
        console.log("	- "+worker.name +": "+worker.percent);
    }

})
